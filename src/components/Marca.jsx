import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Marca = ({ tipo }) => {
  const { marca } = useParams();

  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await axios.get(
          `https://concesionario-s48f.onrender.com/vehiculos/${tipo}/marcas/${marca}`
        );
        setVehiculos(response.data);
      } catch (err) {
        setError('No fue posible cargar los vehículos de esta marca.');
      } finally {
        setLoading(false);
      }
    };

    fetchVehiculos();
  }, [tipo, marca]);

  if (loading) {
    return <div id="carga" > <img width="50px" src="https://img.icons8.com/?size=100&id=11326&format=png&color=000000" alt="" /> <br /> Cargando... </div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="marca-section">
      <h1 className="marca-title">
        {marca.charAt(0).toUpperCase() + marca.slice(1)}
      </h1>


      <div className="vehiculos-grid">
        {vehiculos.map((vehiculo) => (
          <article key={vehiculo.id} className="vehiculo-card">
            <img
              src={vehiculo.imagen}
              alt={vehiculo.modelo}
              className="vehiculo-img"
            />

            <div className="vehiculo-body">
              <h3 className="vehiculo-modelo">{vehiculo.modelo}</h3>
              <p>Año: {vehiculo.year}</p>
              <p>${vehiculo.precio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Marca;
