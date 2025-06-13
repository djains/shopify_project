import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const containerStyle = {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "1rem",
    color: "#333",
  };

  const emptyCartStyle = {
    textAlign: "center",
    fontStyle: "italic",
    color: "#888",
  };

  const totalStyle = {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginTop: "1rem",
    color: "#222",
  };

 const buttonStyle = {
  display: "block",
  margin: "1.5rem auto 0",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",

};


  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={emptyCartStyle}>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3 style={totalStyle}>Total: ${totalPrice.toFixed(2)}</h3>
          <Link to="/checkout">
            <button style={buttonStyle}>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
