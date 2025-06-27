import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import FadeWrapper from './FadeWrapper.jsx';
import Home from './Home.jsx';
import Inventory from './Inventory.jsx';
import FormWrapper from './FormWrapper.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';



export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FadeWrapper><Home /></FadeWrapper>} />
        <Route path="/inventory" element={<FadeWrapper><Inventory /></FadeWrapper>} />
        <Route path="/pre-approval" element={<FormWrapper type="preapproval" />} />
        <Route path="/trade-in" element={<FormWrapper type="tradein" />} />
        <Route path="/contact-us" element={<FormWrapper type="contact" />} />
       <Route path="/privacy-policy" element={<FadeWrapper><PrivacyPolicy /></FadeWrapper>} />

      </Routes>
    </AnimatePresence>
  );
}