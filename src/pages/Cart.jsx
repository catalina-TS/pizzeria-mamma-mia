import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {

  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5">
      <h2>Detalles del pedido:</h2>
      
      {cart.length === 0 ? (
        <p className="mt-4">El carrito está vacío. ¡Agrega unas ricas pizzas!</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center gap-2 mb-3 p-2 border rounded">
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} className="flex-shrink-0" style={{ width: '60px', borderRadius: '5px', marginRight: '15px' }} />
              <h5 className="text-capitalize mb-0">{pizza.name}</h5>
            </div>

            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
              <h5 className="mb-0">${(pizza.price * pizza.count).toLocaleString("es-CL")}</h5>
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-outline-danger btn-sm px-3" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                <span className="fs-5">{pizza.count}</span>
                <button className="btn btn-outline-primary btn-sm px-3" onClick={() => increaseQuantity(pizza.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}

      <h3 className="mt-4">Total: ${total.toLocaleString("es-CL")}</h3>
      <button className="btn btn-dark mt-3 px-4" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;