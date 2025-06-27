import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import FadeWrapper from './FadeWrapper.jsx';
import Home from './Home.jsx';
import Inventory from './Inventory.jsx';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FadeWrapper><Home /></FadeWrapper>} />
        <Route path="/inventory" element={<FadeWrapper><Inventory /></FadeWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}