import React from "react";
import "./Hero.css";

/* Using hosted images so you don't need local assets */
const Hero = () => {
  return (
    <section className="hero">
      <picture className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1920&auto=format&fit=crop"
          alt="Vision X9 Concept"
        />
      </picture>

      <div className="hero-content container">
        <h1>Vision X9</h1>
        <p>Folding aerodynamics. Boundless performance.</p>
        <div className="hero-cta">
          <button className="btn btn-dark">Learn More</button>
          <button className="btn btn-light">Pre-Order</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
