// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisitesPage from './pages/VisitesPage';
import VisitDetails from './pages/VisitDetails';
import Reservation from './pages/Reservation';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visites" element={<VisitesPage />} />
      <Route path="/visite/:id" element={<VisitDetails />} />
      <Route path="/reservation/:id" element={<Reservation />} />

      {/* Autres routes */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
