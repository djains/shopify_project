import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => setError(err.message));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (error) {
    return <div style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;
  }

  if (!product) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  const containerStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    maxWidth: '100%',
    borderRadius: '8px',
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333',
  };

  const descriptionStyle = {
    marginBottom: '1rem',
    lineHeight: '1.5',
    color: '#555',
  };

  const priceStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#222',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={imageStyle}
      />
      <p style={descriptionStyle}>{product.description}</p>
      <p style={priceStyle}>Price: ${product.price}</p>
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

export default ProductDetail;
