import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Utiliza createRoot directamente
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
