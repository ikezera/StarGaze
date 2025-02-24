import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure paths are correct
import { ProductProvider } from './components/ProductContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
);