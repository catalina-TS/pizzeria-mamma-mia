import { createContext, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [lastAdded, setLastAdded] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (pizza) => {
    const foundIndex = cart.findIndex((p) => p.id === pizza.id);

    if (foundIndex >= 0) {
      const newCart = [...cart];
      newCart[foundIndex].count++;
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }

    setLastAdded(pizza);
    setShowToast(true);
  };

  const increaseQuantity = (id) => {
    const newCart = cart.map((p) =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    );
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
      .filter((p) => p.count > 0);
    setCart(newCart);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}

      <ToastContainer position="bottom-end" containerPosition="fixed" className="p-3" style={{ zIndex: 1080 }}>
        <Toast bg="dark" show={showToast} onClose={() => setShowToast(false)} delay={2500} autohide>
          <Toast.Body className="text-white d-flex align-items-center gap-2">
            <span>🍕</span>
            <span>
              <span className="fw-bold">Pizza</span> <span className="text-capitalize fw-bold">{lastAdded?.name}</span> añadida al carrito
            </span>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </CartContext.Provider>
  );
};

export default CartProvider;
