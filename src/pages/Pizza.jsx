import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await res.json();
    setPizza(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) {
    return <div className="text-center mt-5"><h3>Cargando pizza...</h3></div>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img 
              src={pizza.img} 
              className="img-fluid rounded-start h-100" 
              alt={pizza.name} 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title text-capitalize">Pizza {pizza.name}</h2>
              <hr />
              <p className="card-text">{pizza.desc}</p>
              
              <p className="card-text">
                <strong>Ingredientes:</strong>
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0">Precio: ${pizza.price.toLocaleString("es-CL")}</h4>
                <Button variant="dark">Añadir 🛒</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;