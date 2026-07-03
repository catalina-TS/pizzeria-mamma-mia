import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ id, name, price, desc, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h4 className="card-title text-capitalize">Pizza {name}</h4>
        <hr />
        <p className="card-text text-center text-muted">Ingredientes:</p>
        <ul className="text-center list-unstyled">
          {ingredients?.map((ingredient, i) => (
            <li key={i}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />
        <h4 className="text-center pb-3">Precio: ${price.toLocaleString("es-CL")}</h4>
        
        <div className="d-flex justify-content-around">
          
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
            Ver Más 👀
          </Link>
          
          <button 
            className="btn btn-dark" 
            onClick={() => addToCart({ id, name, price, desc, img, ingredients })}
          >
            Añadir 🛒
          </button>
        </div>

      </div>
    </div>
  );
};

export default CardPizza;
