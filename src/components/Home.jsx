import Header from './Header';
import CardPizza from './CardPizza';

import pizzaNapolitana from '../assets/img/pizzaNapolitana.png';
import pizzaEspañola from '../assets/img/pizzaEspañola.png';
import pizzaPepperoni from '../assets/img/pizzaPepperoni.png';

const Home = () => {
  return (
    <>
      <Header />
      
      <div className="d-flex justify-content-center gap-4 mt-4 mb-4">
        
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={pizzaNapolitana}
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img={pizzaEspañola}
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img={pizzaPepperoni}
        />

      </div>
    </>
  );
};

export default Home;