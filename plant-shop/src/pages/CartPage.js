import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice.jsx';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={`/images/${item.img}`} alt={item.name} width="100" />
            <div>
              <h4>{item.name}</h4>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

              <button onClick={() => dispatch(updateQuantity({ id: item.id, type: 'inc' }))}>+</button>
              <button onClick={() => dispatch(updateQuantity({ id: item.id, type: 'dec' }))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: '20px' }}>
        <button disabled>Checkout - Coming Soon</button>
        <button onClick={() => navigate('/products')} style={{ marginLeft: '10px' }}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPage;
