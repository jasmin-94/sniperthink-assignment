import { motion } from "framer-motion";
import { sendInterest } from "../services/api";
import { useState } from "react";

function StrategyCard({ step }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      setMessage("Please enter name and email.");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);
      setMessage("Submitting...");
      setMessageType("loading");

      await sendInterest({
        name: formData.name,
        email: formData.email,
        step: step.title
      });

      setMessage("Interest submitted successfully!");
      setMessageType("success");
    } catch (error) {
      setMessage("Something went wrong.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "#020617",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "40px",
          color: "white"
        }}
      >
        <div style={{ fontSize: "40px" }}>{step.icon}</div>

        <h4 style={{ color: "#6366f1" }}>Step {step.id}</h4>

        <h2>{step.title}</h2>

        <p style={{ color: "#94a3b8" }}>{step.description}</p>

        <button
          onClick={() => setOpen(true)}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "#4f46e5",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer"
          }}
        >
          I'm Interested
        </button>
      </motion.div>

      {/* POPUP MODAL */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            style={{
              background: "#020617",
              padding: "40px",
              borderRadius: "12px",
              width: "350px",
              border: "1px solid #1e293b",
              color: "white"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              Interested in {step.title}?
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleChange}
              value={formData.name}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
                border: "1px solid #334155",
                background: "#020617",
                color: "white"
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={handleChange}
              value={formData.email}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "6px",
                border: "1px solid #334155",
                background: "#020617",
                color: "white"
              }}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: "100%",
                padding: "10px",
                background: "#4f46e5",
                border: "none",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer"
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {/* MESSAGE */}
            {message && (
              <div
                style={{
                  marginTop: "15px",
                  padding: "10px",
                  borderRadius: "6px",
                  background:
                    messageType === "success"
                      ? "#16a34a"
                      : messageType === "error"
                      ? "#dc2626"
                      : "#6366f1",
                  color: "white"
                }}
              >
                {message}
              </div>
            )}

            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: "15px",
                width: "100%",
                background: "transparent",
                border: "1px solid #334155",
                color: "#94a3b8",
                padding: "8px",
                borderRadius: "6px"
              }}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default StrategyCard;