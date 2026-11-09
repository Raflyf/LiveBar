import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { renderDocumentation } from './src/docs/render';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'static-documentation',
      transformIndexHtml: {
        order: 'pre',
        handler(html, context) {
          if (!html.includes('<!--DOC_BODY-->')) return html;
          const path = context.filename.replaceAll('\\', '/');
          const page = renderDocumentation(path.endsWith('/doc/id/index.html') ? 'id' : 'en');
          return html.replace('<!--DOC_HEAD-->', () => page.head).replace('<!--DOC_BODY-->', () => page.body);
        },
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        docs: resolve(import.meta.dirname, 'doc/index.html'),
        docsId: resolve(import.meta.dirname, 'doc/id/index.html'),
      },
    },
  },
});
