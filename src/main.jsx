import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/config'; // Initialize bilingual translations
import './index.css';   // Tailwind CSS and typography tokens
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
