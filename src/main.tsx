import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const lang = root.dataset.language === 'id' ? 'id' : 'en';
let useSavedLanguage = false;
try { useSavedLanguage = location.pathname === '/' && localStorage.getItem('lang') === 'id'; } catch { /* Use the URL when storage is unavailable. */ }
if (useSavedLanguage) {
  location.replace('/id' + location.search + location.hash);
} else {
  const app = <React.StrictMode><App initialLang={lang} /></React.StrictMode>;
  if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
  else ReactDOM.createRoot(root).render(app);
}
