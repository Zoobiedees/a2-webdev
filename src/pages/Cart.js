import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { items, updateQty, removeFromCart, clearCart, summary } = useCart();
  const lineItems = Object.values(items);

  return (
    <div className="container" style={{ padding: "96px 0 56px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Your Cart</h2>

      {lineItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display:"grid", gap:12 }}>
            {lineItems.map(({ product, qty }) => (
              <div key={product.id} style={{
                display:"grid", gridTemplateColumns:"84px 1fr auto", gap: 12,
                alignItems:"center", border:"1px solid #eee", borderRadius:12, padding:12
              }}>
                <img src={product.image} alt={product.name} style={{ width:84, height:56, objectFit:"cover", borderRadius:8 }} />
                <div>
                  <div style={{ fontWeight:800 }}>{product.name}</div>
                  <div style={{ color:"#333" }}>${product.price.toLocaleString()}</div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <button className="btn btn-light" onClick={()=>updateQty(product.id, qty-1)}>-</button>
                  <div style={{ minWidth: 32, textAlign:"center" }}>{qty}</div>
                  <button className="btn btn-light" onClick={()=>updateQty(product.id, qty+1)}>+</button>
                  <button className="btn btn-light" onClick={()=>removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div style={{
            marginTop: 24, display:"grid", gap:8, justifyContent:"end"
          }}>
            <div>Subtotal: <strong>${summary.subtotal.toFixed(2)}</strong></div>
            <div>Tax (10%): <strong>${summary.tax.toFixed(2)}</strong></div>
            <div style={{ fontSize: 20 }}>Total: <strong>${summary.total.toFixed(2)}</strong></div>
            <div style={{ display:"flex", gap:10, marginTop: 8 }}>
              <button className="btn btn-dark" onClick={()=>alert("Checkout simulated ✅")}>Proceed to Checkout</button>
              <button className="btn btn-light" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
