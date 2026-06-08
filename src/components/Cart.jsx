import { useState } from 'react';
import { pizzaCart } from '../pizzas';
import { formatNumber } from '../utils/formatNumber';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);
    const increaseCount = (id) => {
        const newCart = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, count: pizza.count + 1 };
            }
            return pizza;
        });
        setCart(newCart);
    };

    const decreaseCount = (id) => {
        const newCart = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, count: pizza.count - 1 };
            }
            return pizza;
        })
            .filter((pizza) => pizza.count > 0);
        setCart(newCart);
    };

    const total = cart.reduce((acumulador, pizza) => acumulador + (pizza.price * pizza.count), 0);
        return (
        <div className="container mt-5">
            <h2 className="mb-4">Detalles del pedido</h2>
            {cart.map((pizza) => (
                <div key={pizza.id} className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded">
                    <div className="d-flex align-items-center">
                        <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
                        <h5 className="mb-0 text-capitalize">{pizza.name}</h5>
                    </div>

                    <div className="d-flex align-items-center">
                        <strong className="me-3">${formatNumber(pizza.price)}</strong>

                        <Button variant="outline-danger" size="sm" onClick={() => decreaseCount(pizza.id)}>-</Button>
                        <strong className="mx-2">{pizza.count}</strong>
                        <Button variant="outline-primary" size="sm" onClick={() => increaseCount(pizza.id)}>+</Button>
                    </div>

                </div>
            ))}

            <div className="mt-4">
                <h3>Total: ${formatNumber(total)}</h3>
                <Button variant="dark" className="mt-2">Pagar</Button>
            </div>

        </div>
    );
};

export default Cart;