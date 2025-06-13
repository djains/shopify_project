import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  
  const containerStyle = {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '1rem',
  };

  const listItemStyle = {
    padding: '0.5rem 0',
    borderBottom: '1px solid #eee',
    fontSize: '1rem',
  };

  const totalStyle = {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#222',
    marginTop: '1rem',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  };

  const emptyStyle = {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Checkout</h1>
      {cartItems.length === 0 ? (
        <p style={emptyStyle}>Your cart is empty.</p>
      ) : (
        <>
          <ul style={listStyle}>
            {cartItems.map(item => (
              <li key={item.id} style={listItemStyle}>
                {item.title} — {item.quantity} × ${item.price}
              </li>
            ))}
          </ul>
          <h3 style={totalStyle}>Total: ${total.toFixed(2)}</h3>
          <button
            style={buttonStyle}
            onClick={() => alert('🎉 Order placed successfully!')}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
