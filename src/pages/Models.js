import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

function Models() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") || "all";
  const [category, setCategory] = useState(initialCat);
  const [sort, setSort] = useState(""); // "", "low", "high"
  const [visible, setVisible] = useState(8); // pagination via Load More

  // compute filtered + sorted products
  const list = useMemo(() => {
    let arr = [...PRODUCTS];
    if (category !== "all") arr = arr.filter(p => p.category === category);
    if (sort === "low") arr.sort((a,b) => a.price - b.price);
    if (sort === "high") arr.sort((a,b) => b.price - a.price);
    return arr;
  }, [category, sort]);

  const onCategoryChange = (cat) => {
    setCategory(cat);
    setVisible(8);
    const next = new URLSearchParams(params);
    if (cat === "all") next.delete("category");
    else next.set("category", cat);
    setParams(next, { replace: true });
  };

  return (
    <div className="container" style={{ padding: "96px 0 56px" }}>
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap"
      }}>
        <h2 style={{ fontSize: 32, fontWeight: 800 }}>Models</h2>

        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          {/* Category filter */}
          <select
            value={category}
            onChange={(e)=>onCategoryChange(e.target.value)}
            style={selectStyle}
          >
            <option value="all">All categories</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c[0].toUpperCase()+c.slice(1)}</option>)}
          </select>

          {/* Sorting */}
          <select
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
            style={selectStyle}
          >
            <option value="">Sort</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginTop: 20 }}>
        {list.slice(0, visible).map(p => <CarCard key={p.id} product={p} />)}
      </div>

      {/* Load More pagination */}
      {visible < list.length && (
        <div style={{ textAlign:"center", marginTop: 24 }}>
          <button className="btn btn-dark" onClick={()=>setVisible(v=>v+8)}>Load More</button>
        </div>
      )}

      {/* No results */}
      {list.length === 0 && (
        <p style={{ marginTop: 20 }}>No models found for this selection.</p>
      )}
    </div>
  );
}

const selectStyle = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #ddd",
  background: "#fff"
};

export default Models;
