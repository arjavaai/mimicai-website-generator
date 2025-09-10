# Server-Side Rendering (SSR) Implementation Guide

## Overview

This document details the complete implementation of Server-Side Rendering (SSR) for a React + Vite application deployed on Vercel. The implementation ensures full HTML content rendering for SEO optimization while maintaining client-side interactivity.

## Project Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6.3
- **Routing**: React Router v6
- **SEO**: React Helmet Async
- **Styling**: Tailwind CSS + Framer Motion
- **Deployment**: Vercel
- **Runtime**: Node.js 20.x

## Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Client        │    │   Vercel         │    │   API Function  │
│   Browser       │────│   Rewrites       │────│   /api/render   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │  SSR Renderer   │
                                               │  React to HTML  │
                                               └─────────────────┘
```

## Key Components

### 1. Entry Points

#### Client Entry (`src/entry-client.tsx`)
```typescript
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

hydrateRoot(
  document.getElementById('root')!,
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);
```

#### Server Entry (`src/entry-server.tsx`)
```typescript
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const helmetContext = {} as Record<string, any>;
  const Router = ({ children }: { children: React.ReactNode }) => (
    <StaticRouter location={url}>{children}</StaticRouter>
  );
  
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <React.StrictMode>
        <App Router={Router} />
      </React.StrictMode>
    </HelmetProvider>
  );
  
  const { helmet } = helmetContext;
  const headHtml = [
    helmet?.title?.toString() || '',
    helmet?.meta?.toString() || '',
    helmet?.link?.toString() || ''
  ].join('');
  
  return { appHtml, headHtml };
}
```

### 2. Vercel Configuration (`vercel.json`)

```json
{
  "rewrites": [
    {
      "source": "/",
      "destination": "/api/render"
    },
    {
      "source": "/((?!api|assets|_next|favicon.ico|.*\\..*).*)",
      "destination": "/api/render"
    }
  ],
  "buildCommand": "npm run build:vercel && mv dist/client/index.html dist/client/_index.html",
  "outputDirectory": "dist/client",
  "framework": "vite",
  "engines": {
    "node": "20.x"
  },
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. API Function (`api/render.js`)

```javascript
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  try {
    const url = req.url;
    
    // Load server-side render function and HTML template
    const { render } = await import('../dist/server/entry-server.js');
    const template = readFileSync(
      resolve(__dirname, '../dist/client/_index.html'), 
      'utf-8'
    );

    // Render the app to HTML
    const { appHtml, headHtml } = await render(url);
    
    // Replace placeholders in HTML template
    let html = template.replace(`<!--ssr-outlet-->`, appHtml);
    html = html.replace(`<!--head-outlet-->`, headHtml);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    
    res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    
    // Fallback to client-side rendering
    try {
      const template = readFileSync(
        resolve(__dirname, '../dist/client/_index.html'), 
        'utf-8'
      );
      res.status(200).send(template);
    } catch (fallbackError) {
      res.status(500).send('Internal Server Error');
    }
  }
}
```

### 4. Vite Configuration (`vite.config.ts`)

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  ssr: {
    noExternal: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      'framer-motion',
      'lucide-react',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
      'tailwindcss-animate',
      'react-helmet-async',
    ],
  },
}));
```

### 5. Build Scripts (`package.json`)

```json
{
  "scripts": {
    "dev": "vite",
    "dev:ssr": "node server.js",
    "build": "vite build",
    "build:ssr": "vite build && vite build --ssr src/entry-server.tsx --outDir dist/server",
    "build:vercel": "vite build && vite build --ssr src/entry-server.tsx --outDir dist/server"
  }
}
```

## Critical Issues and Solutions

### 1. **Express 5 Routing Issues**

**Problem**: `app.use('*', ...)` caused path-to-regexp errors.

**Solution**: Use middleware without path specification:
```javascript
app.use(async (req, res) => {
  // SSR logic here
});
```

### 2. **React Helmet CommonJS/ESM Issues**

**Problem**: Named export `HelmetProvider` not found in Vite SSR.

**Solution**: Add to `ssr.noExternal` in `vite.config.ts`:
```typescript
ssr: {
  noExternal: ['react-helmet-async']
}
```

### 3. **Framer Motion SSR Compatibility**

**Problem**: `useInView` and motion components breaking during SSR.

**Solution**: Conditional rendering based on environment:
```typescript
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // For SSR, always show content as visible
  const shouldAnimate = typeof window !== 'undefined';
  const animateState = shouldAnimate ? 
    (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }) : 
    { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      animate={animateState}
      transition={{
        duration: shouldAnimate ? 0.8 : 0,
        delay: shouldAnimate ? delay : 0
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### 4. **Vercel index.html Override Issue**

**Problem**: Vercel serves static `index.html` instead of using rewrite rules.

**Solution**: Rename `index.html` during build process:
```json
{
  "buildCommand": "npm run build:vercel && mv dist/client/index.html dist/client/_index.html"
}
```

### 5. **Loading Screen SSR Issues**

**Problem**: Client-side loading delays preventing full SSR content.

**Solution**: Conditional loading based on environment:
```typescript
const App = ({ Router = BrowserRouter }: AppProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChatbotLoaded, setIsChatbotLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setIsChatbotLoaded(true), 1000);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Server-side: no loading delay
      setIsChatbotLoaded(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && typeof window !== 'undefined' && <LoadingScreen />}
        {/* Rest of app */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};
```

## SEO Implementation

### Per-Route Meta Tags

Each page component includes specific SEO optimization:

```typescript
const Index = () => {
  return (
    <motion.div className="min-h-screen bg-[#121212] text-white overflow-hidden">
      <SEO 
        title="ThreeAtoms - AI Solutions | Transform Your Business with AI"
        description="ThreeAtoms helps businesses transform through AI. Services include LLM fine-tuning, RAG implementation, AI agents, content automation and more."
        keywords="AI solutions, business transformation, artificial intelligence, digital transformation, AI consulting, LLM, RAG, AI agents"
        url="https://threeatoms.com"
        canonical="https://threeatoms.com/"
      />
      {/* Page content */}
    </motion.div>
  );
};
```

### SEO Component (`src/components/SEO.tsx`)

```typescript
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
}

const SEO = ({
  title = "ThreeAtoms - AI Solutions",
  description = "ThreeAtoms helps businesses integrate AI solutions with ease.",
  keywords = "AI solutions, LLM fine-tuning, RAG implementation",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://threeatoms.com",
  canonical = ""
}: SEOProps) => {
  const formattedUrl = url.endsWith("/") ? url : `${url}/`;
  const canonicalUrl = canonical || formattedUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={formattedUrl} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
```

## Deployment Process

### Local Development
```bash
npm run dev:ssr  # Start SSR development server
```

### Production Build
```bash
npm run build:vercel  # Build for Vercel deployment
```

### Vercel Deployment
```bash
npx vercel --prod  # Deploy to production
```

## Testing SSR Implementation

### Check Server-Side Rendering
```bash
curl -s https://www.threeatoms.com/ | head -60
```

### Verify Full Content
Look for complete HTML structure including:
- Navigation components
- Hero section content
- Services section
- Footer content
- Dynamic meta tags with `data-rh="true"` attributes

### Debug Logs
Check Vercel function logs:
```bash
npx vercel logs [deployment-url]
```

## Performance Optimizations

### 1. Code Splitting
- Lazy load non-critical components (Chatbot)
- Use dynamic imports for heavy components

### 2. Caching Strategy
- Static assets: `max-age=31536000, immutable`
- HTML content: `max-age=0, must-revalidate`

### 3. Build Optimizations
- Manual chunks disabled for better SSR compatibility
- SSR-specific dependency externalization

## Best Practices

### 1. SSR-Safe Components
- Always check `typeof window !== 'undefined'` before using browser APIs
- Provide server-side fallbacks for client-only features
- Use conditional rendering for animations

### 2. Error Handling
- Implement graceful fallbacks in API functions
- Log errors for debugging
- Serve static HTML if SSR fails

### 3. SEO Optimization
- Unique meta tags for each route
- Proper canonical URLs
- Complete Open Graph and Twitter Card tags

## Troubleshooting

### Common Issues

1. **Empty `<div id="root">` in view-source**
   - Check if rewrite rules are working
   - Verify API function is being called
   - Ensure `index.html` is renamed to prevent static serving

2. **Module not found errors**
   - Add problematic packages to `ssr.noExternal` array
   - Check file path casing consistency

3. **Hydration mismatches**
   - Ensure server and client render identical content
   - Use conditional rendering for client-only features

4. **Animations not working**
   - Implement proper SSR compatibility for motion components
   - Use environment checks for animation logic

## Results

### Before SSR Implementation
```html
<div id="root"><!--ssr-outlet--></div>
```

### After SSR Implementation
```html
<div id="root">
  <div role="region" aria-label="Notifications">...</div>
  <header class="fixed top-0 left-0 right-0 z-50">...</header>
  <main class="relative">...</main>
  <footer>...</footer>
</div>
```

## Conclusion

This SSR implementation successfully provides:

✅ **Complete server-side rendering** with full HTML content  
✅ **SEO optimization** with dynamic meta tags  
✅ **Vercel compatibility** with proper function configuration  
✅ **Performance optimization** with appropriate caching  
✅ **Error handling** with graceful fallbacks  
✅ **Development experience** with working local SSR server  

The implementation ensures that search engines and social media platforms receive fully rendered HTML content while maintaining the interactive client-side experience for users.