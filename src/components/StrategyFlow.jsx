import StrategyCard from "./StrategyCard";
import { steps } from "../data/steps";
import { motion } from "framer-motion";

function StrategyFlow() {
  return (
    <div
    id="strategy"
      style={{
        background: "#020617",
        padding: "120px 20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%"
        }}
      >

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "100px"
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              color: "white",
              marginBottom: "20px"
            }}
          >
            How SniperThink Works
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "18px",
              color: "#94a3b8"
            }}
          >
            SniperThink transforms scattered business data into powerful
            insights. Using automation and AI, teams can focus only on the
            strategies that matter most.
          </p>
        </motion.div>

        {/* STEPS */}
        <div style={{ display: "grid", gap: "100px" }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "60px",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse"
              }}
            >

              {/* IMAGE */}
              <div style={{ flex: 1 }}>
                <img
  src={
    step.id === 1
      ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      : step.id === 2
      ? "https://images.unsplash.com/photo-1557804506-669a67965ba0"
      : step.id === 3
      ? "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
      : "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
  alt="business analytics"
  style={{
    width: "100%",
    borderRadius: "14px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
  }}
/>
              </div>

              {/* CARD */}
              <div style={{ flex: 1 }}>
                <StrategyCard step={step} />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default StrategyFlow;