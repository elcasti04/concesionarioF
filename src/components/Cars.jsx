import React from 'react';
import { Link } from 'react-router-dom';

const Cars = () => {
  const marcas = ['chevrolet', 'ferrari', 'lambo', 'mazda', 'mercedes'];

  return (
    <section className="cars-container"
          style={{
        height: '18vh',
        width: 'auto',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      <div className="brand-card">
        <h1 className="brand-title">Nuestros Carros</h1>

        <p className="vehiculos-description">
          Explora nuestras marcas de vehículos, pensadas para brindarte
          comodidad, potencia y seguridad.
        </p>

        {marcas.map((marca) => (
          <Link key={marca} to={`/vehiculos/cars/${marca}`}>
            <button className="brand-btn">
              {marca.charAt(0).toUpperCase() + marca.slice(1)}
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cars;
