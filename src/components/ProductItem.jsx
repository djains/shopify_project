import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const containerStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    backgroundColor: "lightgray",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem",
  };

  const descriptionStyle = {
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "0.5rem",
  };

  const priceStyle = {
    fontWeight: "bold",
    color: "#222",
    marginBottom: "0.5rem",
  };

  const linkStyle = {
    display: "inline-block",
    marginBottom: "0.5rem",
    color: "#007bff",
    textDecoration: "none",
    fontSize: "0.95rem",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{product.title}</h2>
      <p style={descriptionStyle}>
        {product.description.length > 100
          ? product.description.slice(0, 100) + "..."
          : product.description}
      </p>
      <p style={priceStyle}>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`} style={linkStyle}>
        View Details
      </Link>
      <br />
      <button
        onClick={() => {
          alert("🎉 Order Added To Cart !");
          handleAddToCart();
        }}
        style={buttonStyle}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
