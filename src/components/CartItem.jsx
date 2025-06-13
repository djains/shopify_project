import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };


  const itemStyle = {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    backgroundColor: '#fafafa',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const priceStyle = {
    color: '#333',
    marginBottom: '0.5rem',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    marginLeft: '0.5rem',
    width: '60px',
    padding: '0.3rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={itemStyle}>
      <h2 style={titleStyle}>{item.title}</h2>
      <p style={priceStyle}>Price: ${item.price}</p>
      <label style={labelStyle}>
        Quantity:
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
          style={inputStyle}
        />
      </label>
      <button onClick={handleRemove} style={buttonStyle}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
