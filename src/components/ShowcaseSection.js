import React from "react";
import "./ShowcaseSection.css";

const ShowcaseSection = ({ title, text, img, reverse, cta="Learn more" }) => {
  return (
    <section className={`showcase container ${reverse ? "reverse" : ""}`}>
      <div className="showcase-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn btn-dark">{cta}</button>
      </div>
      <div className="showcase-img">
        <img src={img} alt={title} />
      </div>
    </section>
  );
};

export default ShowcaseSection;
