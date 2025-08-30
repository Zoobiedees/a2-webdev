import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // we’ll create this file once
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch products from Supabase
    const fetchProducts = async () => {
      let { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
