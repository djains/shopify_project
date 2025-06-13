import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#007bff',
    padding: '1rem 2rem',
    color: '#fff',
  };
  
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    textalign: 'center',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  };
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" style={linkStyle}>
              Cart
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/djains/shopify_project"
              target='blank'
             
              style={linkStyle}
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
