// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisitesPage from './pages/VisitesPage';
import VisitDetails from './pages/VisitDetails';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Subscribe from './pages/Subscribe';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import RoleRoute from './components/RoleRoute';
import ExcursionsPage from './pages/ExcursionsPage';
import ExcursionDetails from './pages/ExcursionDetails';
import PackagesPage from './pages/PackagesPage';
import PackageDetails from './pages/PackageDetails';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';



const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Subscribe" element={<Subscribe />} />
      <Route path="/visites" element={<VisitesPage />} />
      <Route path="/visite/:id" element={<VisitDetails />} />
      <Route path="/excursions" element={<ExcursionsPage />} />
      <Route path="/excursion/:id" element={<ExcursionDetails />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/package/:id" element={<PackageDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
       {/* Réservation accessible uniquement aux touriste */}
       <Route
        path="/reservation/:id"
        element={
          <RoleRoute allowedRoles={["touriste"]}>
            <Reservation />
          </RoleRoute>
        }
         
      />

      {/* Profil accessible uniquement aux utilisateurs authentifiés */}
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      {/* Exemple de route admin */}
      <Route
        path="/admin/*"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            {/* ajouter ici routes AdminDashboard, UsersManagement, etc. */}
          </RoleRoute>
        }
      />
    </Routes>
    <Footer />
  </>
);

export default App;