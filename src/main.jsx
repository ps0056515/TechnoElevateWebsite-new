import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import '../shared/site.css';
import '../shared/nav.css';
import '../shared/backgrounds.css';
import '../shared/content.css';
import '../shared/home-hero.css';
import '../shared/mobile.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
