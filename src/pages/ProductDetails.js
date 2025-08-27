import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container" style={{ padding: "96px 0 56px" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "96px 0 56px" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1.1fr 1fr", gap: 28 }}>
        {/* LEFT: IMAGE */}
        <div>
          <img src={product.image} alt={product.name} style={{ width:"100%", borderRadius:12 }} />
        </div>

        {/* RIGHT: INFO */}
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800 }}>{product.name}</h1>
          <p style={{ margin: "8px 0", color:"#333" }}>⭐ {product.rating.toFixed(1)} / 5</p>
          <h3 style={{ marginTop: 8, fontSize: 24, fontWeight: 700 }}>${product.price.toLocaleString()}</h3>
          <p style={{ marginTop: 12, color:"#444", lineHeight: 1.6 }}>
            {product.description} <br /><br />
            Experience unmatched performance and comfort with the {product.name}. 
            Designed for drivers who crave luxury and power, this model combines sleek aesthetics with 
            cutting-edge technology. Whether it’s long highway drives or city commutes, 
            the {product.name} delivers on all fronts.
          </p>

          <div style={{ display:"flex", gap:12, marginTop: 20 }}>
            <button className="btn btn-dark" onClick={() => addToCart(product)}>Add to Cart</button>
            <a href="#specs" className="btn btn-light">View Specs</a>
          </div>
        </div>
      </div>

      {/* SPECS SECTION */}
      <div id="specs" style={{ marginTop: 60 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Technical Specifications</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: 16 }}>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>Engine:</strong> 2.0L Turbocharged Inline-4
          </div>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>Horsepower:</strong> 250 HP
          </div>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>Transmission:</strong> 8-Speed Automatic
          </div>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>Fuel Efficiency:</strong> 28 MPG City / 36 MPG Highway
          </div>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>0-60 mph:</strong> 6.2 seconds
          </div>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>Top Speed:</strong> 155 mph
          </div>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>Seating:</strong> 5 Adults
          </div>
          <div style={{ background:"#f8f9fa", padding:16, borderRadius:8 }}>
            <strong>Drive Type:</strong> All-Wheel Drive
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
