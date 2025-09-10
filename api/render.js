import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
  try {
    const url = req.url;
    
    // Load the server-side render function and HTML template
    const { render } = await import('../dist/server/entry-server.js');
    const template = fs.readFileSync(
      path.resolve(__dirname, '../dist/client/index.html'), 
      'utf-8'
    );

    // Render the app to HTML
    const { appHtml, headHtml } = await render(url);
    
    // Replace the placeholders in the HTML template
    let html = template.replace(`<!--ssr-outlet-->`, appHtml);
    html = html.replace(`<!--head-outlet-->`, headHtml);

    // Set proper headers for SEO
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    
    res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    
    // Fallback to client-side rendering on error
    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, '../dist/client/index.html'), 
        'utf-8'
      );
      res.status(200).send(template);
    } catch (fallbackError) {
      console.error('Fallback Error:', fallbackError);
      res.status(500).send('Internal Server Error');
    }
  }
}