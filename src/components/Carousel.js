import React, { useEffect, useState } from "react";

/* Minimal dependency-free slider to mimic Samsung rotating heroes */
const slides = [
  {
    title: "Vision X9",
    text: "Folding aerodynamics. Boundless performance.",
    img: "https://images.theconversation.com/files/127127/original/image-20160617-11101-1x7xhsf.jpg?ixlib=rb-4.1.0&rect=0%2C218%2C2000%2C970&q=45&auto=format&w=1356&h=668&fit=crop",
  },
  {
    title: "Eclipse One",
    text: "Electric luxury, uncompromised.",
    img: "https://hips.hearstapps.com/hmg-prod/images/22c0387-028-1670825222.jpg",
  },
  {
    title: "Phantom GT",
    text: "A future built for speed.",
    img: "https://i.ytimg.com/vi/UjipsuTl9WY/maxresdefault.jpg",
  },
];

const Carousel = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const s = slides[idx];

  return (
    <section style={{ position: "relative", height: "72vh", minHeight: 520, overflow: "hidden" }}>
      <img
        src={s.img}
        alt={s.title}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg,rgba(255, 255, 255, 0.15),rgba(255, 255, 255, 0) 40%,rgba(255, 255, 255, 0.25))"
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2, height: "100%",
        display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 56 }}>
        <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 800 }}>{s.title}</h1>
        <p style={{ marginTop: 8, fontSize: "clamp(16px,2.2vw,20px)" }}>{s.text}</p>
        <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
          <button className="btn btn-dark">Learn More</button>
          <button className="btn btn-light">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
