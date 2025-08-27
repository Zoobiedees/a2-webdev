import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h5>Shop</h5>
          <ul>
            <li>Concept Models</li>
            <li>Accessories</li>
            <li>Pre-orders</li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li>Help Center</li>
            <li>Warranty</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© 2025 ConceptCars. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
