import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './components/ProductContext';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ProductProvider>
        <BrowserRouter basename="/StarGaze"> {/* Add this line */}
          <App />
        </BrowserRouter>
      </ProductProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found!");
}
