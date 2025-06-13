# MimicAI Website Generator

This repository contains the source code for the MimicAI website, featuring various AI services including:

- Content Automation
- AI Workflows
- Website Development
- AI Video Ads
- AI Agents
- Corporate Workshops

## Recent Updates

- Improved service page layouts with consistent 50/50 split design
- Added numbered step indicators with animated rings
- Updated image styling and responsiveness
- Standardized component designs across all service pages

## Server-Side Rendering

This project now supports optional server-side rendering. During development you can start the SSR server with:

```bash
npm run dev:ssr
```

For a production build, generate both client and server bundles:

```bash
npm run build:ssr
```

The Express server in `server.js` will then serve the pre-rendered HTML.

To keep the initial render fast, the Gemini-powered chatbot is lazy loaded a few seconds after the page becomes interactive.
