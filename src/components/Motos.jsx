import React from 'react';
import { Link } from 'react-router-dom';

const Motos = () => {
  const marcas = ['kawasaki', 'susuki', 'yamaha'];

  return (
    <section className="motos-container"
	style={{
        height: '18vh',
        width: 'auto',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      <div className="brand-card">
        <h1 className="brand-title">Nuestras Motos</h1>

        <p className="vehiculos-description">
          Descubre nuestras marcas de motos, seleccionadas para ofrecerte
          rendimiento, estilo y confiabilidad.
        </p>

        {marcas.map((marca) => (
          <Link key={marca} to={`/vehiculos/motos/${marca}`}>
            <button className="brand-btn">
              {marca.charAt(0).toUpperCase() + marca.slice(1)}
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Motos;
