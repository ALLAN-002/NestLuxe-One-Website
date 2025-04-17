
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import React from 'react';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
