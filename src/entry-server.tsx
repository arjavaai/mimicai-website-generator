import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

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

