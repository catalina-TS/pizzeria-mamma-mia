import { useState, useEffect } from 'react';
import CardPizza from './CardPizza';
import Header from './Header';

const Home = () => {
  const [pizzas, setPizzas] = useState ([]);

  const getPizzas = async () => {
    const res = await fetich ("http://localhost:5000/api/pizzas");
    const data = await res.json(); 
    setPizzas(data);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
    <header />
    <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-4 mb-4">
            <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredientes={pizza.ingredients}
            img={pizza.img}
            />
            </div>
        ))}
    </div>
    </div>
    </>
  );
};

export default Home;
