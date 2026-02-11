import React from 'react';

import { Link } from 'react-router-dom';

const Vehiculos = () => {
  return (
    <section
      id="vehiculos"
      className="vehiculos-section"
      style={{
        height: '18vh',
        width: 'auto',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1722094758028-ee0e1cce0405?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Overlay oscuro */}
      <div className="vehiculos-overlay"></div>

      {/* Contenedor principal */}
      <div className="vehiculos-card">
        <header className="vehiculos-header">
          <h1 className="vehiculos-title">
            Nuestra Flota de Vehículos
          </h1>

          <p className="vehiculos-description">
            Explora una selección cuidadosamente elegida de carros y motos.
            En nuestro concesionario combinamos diseño, rendimiento y
            confiabilidad para ofrecerte la mejor experiencia.
          </p>
        </header>

        <div className="vehiculos-actions">
          <Link
            to="/vehiculos/cars"
            className="vehiculos-link"
            id="vehiculos-link-carros"
          >
            <button
              className="vehiculos-btn vehiculos-btn-carros"
              id="vehiculos-btn-carros"
            >
              Carros
            </button>
          </Link>

          <Link
            to="/vehiculos/motos"
            className="vehiculos-link"
            id="vehiculos-link-motos"
          >
            <button
              className="vehiculos-btn vehiculos-btn-motos"
              id="vehiculos-btn-motos"
            >
              Motos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Vehiculos;
