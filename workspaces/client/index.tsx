import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { App } from './src/app';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('Root element not found');
}
hydrateRoot(
  rootElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
