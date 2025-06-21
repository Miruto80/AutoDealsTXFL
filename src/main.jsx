import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './assets/Navbar.jsx'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './assets/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Inventory from './Inventory.jsx';
import { SearchProvider } from './SearchContext.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import Topbar from './assets/Topbar.jsx';
import ChatBot from './ChatBot.jsx';
// re probando
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <SearchProvider>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
        <Footer />
        <ChatBot />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
