import Header from './Header';
import CardPizza from './CardPizza';

import pizzaNapolitana from '../assets/img/pizzaNapolitana.png';
import pizzaEspañola from '../assets/img/pizzaEspañola.png';
import pizzaPepperoni from '../assets/img/pizzaPepperoni.png';

const Home = () => {
  return (
    <>
      <Header />

      <div className="container mt-4">
      <div className="row">

      <div className="col-12 col-md-4 mb-4">

        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={pizzaNapolitana}
        />
      </div>
      <div className="col-12 col-md-4 mb-4">
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img={pizzaEspañola}
        />
      </div>
      <div className="col-12 col-md-4 mb-4">
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img={pizzaPepperoni}
        />
      </div>
    </div >
    </div >
    </>
  );
};

export default Home;