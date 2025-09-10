import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  try {
    const url = req.url;
    
    console.log('SSR Request for:', url);
    console.log('Request method:', req.method);
    console.log('__dirname:', __dirname);
    
    // Try multiple possible paths for the SSR entry
    let render;
    let template;
    
    try {
      // Try to load server-side render function
      const serverPath = resolve(__dirname, '../dist/server/entry-server.js');
      console.log('Attempting to load server from:', serverPath);
      const serverModule = await import(serverPath);
      render = serverModule.render;
      
      // Load HTML template
      const templatePath = resolve(__dirname, '../dist/client/_index.html');
      console.log('Attempting to load template from:', templatePath);
      template = readFileSync(templatePath, 'utf-8');
      
    } catch (importError) {
      console.error('Import Error:', importError);
      // Fallback: serve static HTML without SSR
      const fallbackPath = resolve(__dirname, '../dist/client/_index.html');
      template = readFileSync(fallbackPath, 'utf-8');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(template);
    }

    if (!render) {
      console.error('Render function not found, serving static HTML');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(template);
    }

    // Render the app to HTML
    const { appHtml, headHtml } = await render(url);
    
    // Replace the placeholders in the HTML template
    let html = template.replace(`<!--ssr-outlet-->`, appHtml);
    html = html.replace(`<!--head-outlet-->`, headHtml);

    // Set proper headers for SEO
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    
    console.log('SSR Success for:', url);
    res.status(200).send(html);
    
  } catch (error) {
    console.error('SSR Error:', error);
    console.error('Error stack:', error.stack);
    
    // Fallback to client-side rendering on error
    try {
      const template = readFileSync(
        resolve(__dirname, '../dist/client/_index.html'), 
        'utf-8'
      );
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(template);
    } catch (fallbackError) {
      console.error('Fallback Error:', fallbackError);
      res.status(500).send(`
        <html>
          <head><title>Error</title></head>
          <body>
            <h1>Server Error</h1>
            <p>SSR failed and fallback also failed</p>
            <pre>${error.message}</pre>
          </body>
        </html>
      `);
    }
  }
}