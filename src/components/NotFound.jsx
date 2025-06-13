import React from 'react';

const NotFound = () => {
  const containerStyle = {
    padding: '4rem 2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    color: '#333',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#dc3545',
  };

  const messageStyle = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404 - Page Not Found</h1>
      <p style={messageStyle}>Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" style={linkStyle}>Go Back Home</a>
    </div>
  );
};

export default NotFound;
