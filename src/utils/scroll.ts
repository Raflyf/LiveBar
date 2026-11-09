import React from 'react';

export const scrollToSection = (id: string) => (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  // Remove #hash from the browser URL bar
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};
