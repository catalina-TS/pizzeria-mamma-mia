import { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();
    setPizzas(data);
    setLoading(false);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
    <Header />
    <div className="container mt-4">
      {loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center py-5">
          <div className="spinner-border text-danger mb-3" style={{ width: '3rem', height: '3rem' }} role="status" />
          <p className="text-muted">Cargando pizzas...</p>
        </div>
      ) : (
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-4 mb-4">
            <CardPizza
            id={pizza.id}
            desc={pizza.desc}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            />
            </div>
        ))}
      </div>
      )}
    </div>
    </>
  );
};

export default Home;
