// filepath: /C:/ProjetosWebsites/WebsiteAstronauta/StarGaze/src/main.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ProductProvider } from './components/ProductContext';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ProductProvider>
        <App />
      </ProductProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found!");
};