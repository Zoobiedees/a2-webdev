import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CarCard.css";

const CarCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="car-card">
      <Link to={`/product/${product.id}`} className="img-wrap">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="car-meta">
        <h4 className="name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h4>
        <p className="price">${product.price.toLocaleString()}</p>
        <p className="rating">⭐ {product.rating.toFixed(1)}</p>
        <div className="actions">
          <button className="btn btn-dark" onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product.id}`} className="btn btn-light">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
