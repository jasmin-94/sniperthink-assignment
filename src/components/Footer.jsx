function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        color: "#94a3b8",
        padding: "40px 20px",
        textAlign: "center",
        marginTop: "120px",
        borderTop: "1px solid #1e293b"
      }}
    >
      <h3 style={{ color: "#e2e8f0", marginBottom: "10px" }}>
        SniperThink
      </h3>

      <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "14px" }}>
        SniperThink empowers businesses to transform raw data into
        actionable insights using analytics, automation, and AI-driven
        strategies.
      </p>

      <p style={{ marginTop: "20px", fontSize: "13px" }}>
        © 2026 SniperThink. Built for Full Stack Developer Assignment.
      </p>
    </footer>
  );
}

export default Footer;