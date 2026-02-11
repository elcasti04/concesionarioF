import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';



import Home from './components/Home';
import Vehiculos from './components/Vehiculos';
import Cars from './components/Cars';
import Motos from './components/Motos';
import Marca from './components/Marca';

function App() {
  return (
    <div id="app" className="app-container">

      {/* ===== HEADER ===== */}
      <header id="site-header" className="header">
        <div className="header-container">
          <h1 className="header-logo">AUTO PRIME</h1>
          <p className="header-tagline">
            Concesionario premium de carros y motos
          </p>
        </div>
      </header>

      {/* ===== NAVBAR ===== */}
      <nav id="main-navbar" className="navbar">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" className="navbar-link">
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/vehiculos" className="navbar-link">
              Vehículos
            </NavLink>
          </li>

          <li>
            <NavLink to="/vehiculos/cars" className="navbar-link">
              Carros
            </NavLink>
          </li>

          <li>
            <NavLink to="/vehiculos/motos" className="navbar-link">
              Motos
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ===== CONTENIDO ===== */}
      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/vehiculos/cars" element={<Cars />} />
          <Route path="/vehiculos/motos" element={<Motos />} />
          <Route
            path="/vehiculos/cars/:marca"
            element={<Marca tipo="cars" />}
          />
          <Route
            path="/vehiculos/motos/:marca"
            element={<Marca tipo="motos" />}
          />
        </Routes>
      </main>

      {/* ===== FOOTER ===== */}
      <footer id="site-footer" className="footer">
        <div className="footer-container">
          <p className="footer-brand">AUTO PRIME © 2026</p>
          <p className="footer-text">
            Calidad, confianza y diseño en cada vehículo.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
