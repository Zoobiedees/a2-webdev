import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { summary } = useCart();

  return (
    <header className="nav-wrap">
      <div className="nav container">
        <Link to="/" className="brand">ConceptCars</Link>

        <nav className="links">
          <NavLink to="/" end className="link">Home</NavLink>
          <NavLink to="/models" className="link">Models</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/cart" className="link cart-link">
            Cart <span className="cart-badge">{summary.count}</span>
          </NavLink>
          <NavLink to="/login" className="link">Login</NavLink>
          <NavLink to="/register" className="link">Register</NavLink>
        </nav>

        <div className="actions">
          <button className="icon-btn" aria-label="Search">⌕</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
