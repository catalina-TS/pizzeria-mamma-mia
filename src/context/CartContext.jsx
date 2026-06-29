import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);
    const addToCart = (pizza) => {
        const foundPizza = cart.findIndex((p) => p.id === pizza.id);

        if (foundPizza >=0) {
            const newCart = [...cart];
            newCart[foundPizza].count++;
            setCart(newCart);
        } else {
            setCart([...cart, {...pizza, count: 1 }]);
        }
    };
    
    const increaseQuantity = (id) => {
        const newCart = cart.map((p) =>
            p.id === id ? { ...p, count: p.count + 1 } : p
        );
        setCart(newCart);
    };

    const decreaseQuantity = (id) => {
        const newCart = cart.map((p) =>
            p.id === id ? { ...p, count: p.count - 1 } : p
        ).filter((p) => p.count > 0);
        setCart(newCart);
    };

    const total = cart.reduce((acc, pizza) => acc + (pizza.price * pizza.count), 0)
    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider