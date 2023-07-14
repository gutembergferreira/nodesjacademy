import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My App</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/products"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isExpanded}
              >
                Produtos
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/products/create">Cadastrar</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/edit">Editar</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/delete">Deletar</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;