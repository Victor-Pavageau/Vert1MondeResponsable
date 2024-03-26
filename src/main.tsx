import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import RouteHandler from './routing.tsx';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteHandler />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>,
);
