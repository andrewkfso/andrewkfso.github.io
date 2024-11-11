import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="App">
      <nav className={`navbar-vertical ${collapsed ? 'collapsed' : ''}`}>
        <div className="navbar-header" onClick={toggleNavbar}>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-content">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Navbar;