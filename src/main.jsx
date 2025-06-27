import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './assets/Navbar.jsx'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './assets/Footer.jsx';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { SearchProvider } from './SearchContext.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import Topbar from './assets/Topbar.jsx';
import ChatBot from './ChatBot.jsx';
import AnimatedRoutes from './AnimatedRoutes.jsx';

// Componente para Google Analytics que rastrea cambios de ruta
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-C4DPS1VZD0', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GAListener />
      <ScrollToTop />
      <SearchProvider>
        <Topbar />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <ChatBot />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
