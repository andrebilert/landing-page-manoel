import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from "framer-motion"
import Home from './pages/Home';
import Missa from './pages/Missa';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missa" element={<Missa />} />
        </Routes>
      </Router>
    </LazyMotion>
  );
}

export default App;
