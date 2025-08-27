import React from "react";

function About() {
  return (
    <>
      <section className="container" style={{ padding: "96px 0 32px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>About ConceptCars</h2>
        <p style={{ maxWidth: 800, color: "#333" }}>
          ConceptCars is a vision studio crafting next-generation mobility. We combine sustainable
          materials, intelligent software, and human-centered design to push what driving can be.
        </p>
      </section>

      {/* Contact Us container at the bottom of About page */}
      <section className="container" style={{
        padding: "24px 0 96px", display: "grid", gap: 16,
        gridTemplateColumns: "1.2fr 1fr", alignItems: "start"
      }}>
        <div>
          <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Get in touch</h3>
          <p style={{ color:"#333", marginBottom: 16 }}>
            Questions, partnerships, or media? Send us a note — we’ll get back soon.
          </p>
          <form className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input required placeholder="First name" style={inputStyle} />
            <input required placeholder="Last name" style={inputStyle} />
            <input type="email" required placeholder="Email" style={{ ...inputStyle, gridColumn: "span 2" }} />
            <textarea rows={5} placeholder="Message" style={{ ...inputStyle, gridColumn: "span 2", resize:"vertical" }} />
            <div style={{ gridColumn: "span 2" }}>
              <button className="btn btn-dark" type="submit">Send Message</button>
            </div>
          </form>
        </div>

        <aside style={{
          padding: 16, border: "1px solid #eee", borderRadius: 12, background:"#fafafa"
        }}>
          <h4 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>HQ</h4>
          <p>Neo Mobility Park<br/>Sector 9, Tech City<br/>Earth • 400001</p>
          <div style={{ height: 12 }} />
          <h4 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Support</h4>
          <p>support@conceptcars.example<br/>+91 90000 00000</p>
        </aside>
      </section>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #ddd",
  outline: "none",
  background: "#fff"
};

export default About;
