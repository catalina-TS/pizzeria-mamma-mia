import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  // Sacamos todo lo que necesitamos de la bodega
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Detalles del pedido:</h2>
      
      {/* Si el carrito está vacío, mostramos un mensaje */}
      {cart.length === 0 ? (
        <p className="mt-4">El carrito está vacío. ¡Agrega unas ricas pizzas!</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded">
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} style={{ width: '60px', borderRadius: '5px', marginRight: '15px' }} />
              <h5 className="text-capitalize mb-0">{pizza.name}</h5>
            </div>
            
            <div className="d-flex align-items-center">
              <h5 className="mb-0 me-4">${(pizza.price * pizza.count).toLocaleString("es-CL")}</h5>
              <button className="btn btn-outline-danger btn-sm px-3" onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <span className="mx-3 fs-5">{pizza.count}</span>
              <button className="btn btn-outline-primary btn-sm px-3" onClick={() => increaseQuantity(pizza.id)}>+</button>
            </div>
          </div>
        ))
      )}

      <h3 className="mt-4">Total: ${total.toLocaleString("es-CL")}</h3>
      <button className="btn btn-dark mt-3 px-4">Pagar</button>
    </div>
  );
};

export default Cart;