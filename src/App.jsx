import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from "framer-motion"
import Home from './pages/Home';
import Missa from './pages/Missa';
import Festas from './pages/Festas';
import Colacao from './pages/Colacao';
import FotoConvite from './pages/FotoConvite';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missa" element={<Missa />} />
          <Route path="/festas" element={<Festas />} />
          <Route path="/colacao" element={<Colacao />} />
          <Route path="/foto-convite" element={<FotoConvite />} />
        </Routes>
      </Router>
    </LazyMotion>
  );
}

export default App;
