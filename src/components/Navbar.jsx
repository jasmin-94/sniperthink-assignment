function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        background: "#020617",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1e293b",
        zIndex: 1000
      }}
    >
      <h2 style={{ color: "white" }}>
        SniperThink
      </h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <button
          onClick={() => scrollToSection("strategy")}
          style={navBtn}
        >
          Strategy
        </button>

        <button
          onClick={() => scrollToSection("features")}
          style={navBtn}
        >
          Features
        </button>

        <button
          onClick={() => scrollToSection("cta")}
          style={navBtn}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

const navBtn = {
  background: "transparent",
  border: "none",
  color: "#94a3b8",
  cursor: "pointer",
  fontSize: "14px"
};

export default Navbar;