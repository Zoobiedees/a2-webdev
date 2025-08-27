import React from "react";
import "./ProductShowcase.css";

const products = [
  {
    id: 1,
    name: "Argentum",
    tagline: "Electric luxury reimagined",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS04PBwSsVzVbvyg8yyqwf2ABqF8pyKnZbww&s"
  },
  {
    id: 2,
    name: "AeroX",
    tagline: "Aerodynamics meets elegance",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZouZ7pr1fmqpdjAIy8vkLzThb34W2Z8tl9cGVm2YcclM-YyA4cX8qQLnRueeF3FTP5Y&usqp=CAU"
  },
  {
    id: 3,
    name: "Nova SUV",
    tagline: "Power. Comfort. Future.",
    img: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/208726/vision-s-sub-4metre-suv-left-front-three-quarter.png?isig=0&q=80"
  },
  {
    id: 4,
    name: "Trail E",
    tagline: "Unleashing tomorrow's speed",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9odirZIHrO7xsDaVYMgPzlDYRvE-9bPMA1A&s"
  }
];

const ProductShowcase = () => {
  return (
    <section className="product-showcase container">
      {products.map(p => (
        <article key={p.id} className="product-card">
          <img src={p.img} alt={p.name} />
          <div className="product-info">
            <h3>{p.name}</h3>
            <p>{p.tagline}</p>
          </div>
          {/* moved the button here so it sits below the text, not over image */}
          <button className="btn btn-light learn-btn">Learn more</button>
        </article>
      ))}
    </section>
  );
};

export default ProductShowcase;
