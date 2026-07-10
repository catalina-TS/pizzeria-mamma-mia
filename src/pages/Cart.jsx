import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const [mensaje, setMensaje] = useState("");

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });

    if (response.ok) {
      setMensaje("¡Compra realizada con éxito!");
    } else {
      setMensaje("Hubo un error en tu compra.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Detalles del pedido:</h2>

      {mensaje && <div className="alert alert-success">{mensaje}</div>}

      {cart.length === 0 ? (
        <p className="mt-4">El carrito está vacío. ¡Agrega unas ricas pizzas!</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3 p-2 border rounded">
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="flex-shrink-0 rounded" />
              <h5 className="ms-3 text-capitalize mb-0">{pizza.name}</h5>
            </div>

            <div className="d-flex align-items-center gap-2">
              <h5 className="mb-0">${(pizza.price * pizza.count).toLocaleString("es-CL")}</h5>
              <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <span>{pizza.count}</span>
              <button className="btn btn-outline-primary btn-sm" onClick={() => increaseQuantity(pizza.id)}>+</button>
            </div>
          </div>
        ))
      )}

      <h3 className="mt-4">Total: ${total.toLocaleString("es-CL")}</h3>

      <button
        className="btn btn-dark mt-3 px-4"
        disabled={!token}
        onClick={handleCheckout}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
