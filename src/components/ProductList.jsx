import React, { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div style={{ color: 'red', padding: '1rem' }}>Error: {error}</div>;
  }

  
  const containerStyle = {
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  };

  const inputStyle = {
    padding: '0.5rem',
    width: '100%',
    maxWidth: '300px',
    marginBottom: '1.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const productsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>CHOOSE ITEMS TO ADD</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />
      <div style={productsContainerStyle}>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
