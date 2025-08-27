import React from "react";
import "./Home.css";
import Carousel from "../components/Carousel";
import ProductShowcase from "../components/ProductShowcase";
import ShowcaseSection from "../components/ShowcaseSection";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/products";

function Home() {
  return (
    <div>
      {/* Samsung-like rotating hero */}
      <Carousel />

      {/* 2x2 Featured grid */}
      <section className="section">
        <ProductShowcase />
      </section>

      {/* Alternating lifestyle/product sections */}
      <section className="section">
        <ShowcaseSection
          title="The Future of Speed"
          text="Lightning-fast acceleration with AI-assisted handling designed for next-gen thrill seekers."
          img="https://autovista24.autovistagroup.com/wp-content/uploads/sites/5/2021/08/A215688_medium-Skysphere-1024x768.jpg"
        />
        <ShowcaseSection
          title="Luxury, Reimagined"
          text="Crafted interiors, ambient intelligence, and sustainable materials — comfort meets conscience."
          img="https://upload.wikimedia.org/wikipedia/commons/6/6f/Silver_jaguar_c-x75.jpg"
          reverse
        />
      </section>

      {/* Category Links */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Shop by Category</h2>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            {CATEGORIES.map(cat => (
              <Link key={cat} to={`/models?category=${cat}`} className="btn btn-light" style={{ textTransform:"capitalize" }}>
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
