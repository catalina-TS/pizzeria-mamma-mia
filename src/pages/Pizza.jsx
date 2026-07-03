import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  const consultarPizza = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data); 
  };

  useEffect(() => {
    consultarPizza();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100 w-100"
              alt={pizza.name}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-capitalize">Pizza {pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>
              <ul>
                {pizza.ingredients?.map((ingredient, i) => (
                  <li key={i} className="text-capitalize">🍕 {ingredient}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0">Precio: ${pizza.price?.toLocaleString("es-CL")}</h4>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;