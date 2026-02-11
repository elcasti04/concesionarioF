import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="home-section"
      style={{
		height: '18vh',
        width: 'auto',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundImage:"url('https://images.unsplash.com/photo-1715372030036-d8f96cf1e8e6?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="home-overlay"></div>

      {/* Contenido principal */}
      <div className="home-container">
        <div className="home-card">
          <header className="home-header">
            <h1 className="home-title">
              Tu concesionario de confianza
            </h1>

            <h2 className="home-subtitle">
              Calidad, respaldo y los mejores vehículos del mercado
            </h2>
          </header>

          <p className="home-description">
            Somos un concesionario especializado en la venta de carros y motos,
            ofreciendo vehículos cuidadosamente seleccionados, precios
            competitivos y un servicio pensado para brindarte total confianza en
            cada compra.
          </p>

          <div className="home-actions">
            <Link to="/vehiculos" className="home-link">
              <button
                id="home-btn-vehiculos"
                className="home-btn home-btn-primary"
              >
                Explorar vehículos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
