import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>The cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} className="cart-image" />
                            <div className="cart-details">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
