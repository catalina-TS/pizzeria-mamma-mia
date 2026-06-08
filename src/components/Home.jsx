import { pizzas } from '../pizzas';
import CardPizza from './CardPizza';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-4 mb-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
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