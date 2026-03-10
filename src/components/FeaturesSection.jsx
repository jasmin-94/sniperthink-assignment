import { motion } from "framer-motion";

function FeaturesSection() {
  return (
    <div
      id="features"
      style={{
        background: "#020617",
        padding: "120px 20px",
        textAlign: "center"
      }}
    >

      {/* TITLE */}
      <h1
        style={{
          color: "white",
          fontSize: "44px",
          marginBottom: "20px"
        }}
      >
        Why Businesses Choose SniperThink
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "0 auto 80px auto",
          lineHeight: "1.6"
        }}
      >
        SniperThink empowers teams with intelligent insights,
        automation workflows, and AI-driven analytics that
        help businesses move faster and make smarter decisions.
      </p>

      {/* FEATURE CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {[
          { icon: "📊", title: "Advanced Data Insights" },
          { icon: "⚡", title: "Automation Workflows" },
          { icon: "🤖", title: "AI Predictions" },
          { icon: "📈", title: "Business Growth Strategies" }
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(79,70,229,0.3)"
            }}
            style={{
              background: "#020617",
              border: "1px solid #1e293b",
              padding: "40px",
              borderRadius: "14px",
              color: "white"
            }}
          >
            <div style={{ fontSize: "42px" }}>
              {feature.icon}
            </div>

            <h3 style={{ marginTop: "15px" }}>
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* STATS SECTION */}
      <div
        style={{
          marginTop: "120px",
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          flexWrap: "wrap"
        }}
      >
        <div>
          <h2 style={{ color: "#6366f1", fontSize: "42px" }}>
            100+
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Companies Using SniperThink
          </p>
        </div>

        <div>
          <h2 style={{ color: "#6366f1", fontSize: "42px" }}>
            50%
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Faster Strategic Decisions
          </p>
        </div>

        <div>
          <h2 style={{ color: "#6366f1", fontSize: "42px" }}>
            24/7
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Automated Insights
          </p>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div
        id="cta"
        style={{
          marginTop: "120px"
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "36px"
          }}
        >
          Start Building Smarter Strategies
        </h2>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Get Started
        </motion.button>
      </div>

    </div>
  );
}

export default FeaturesSection;