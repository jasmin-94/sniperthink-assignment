import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SniperThink backend is running 🚀");
});

app.post("/api/interest", (req, res) => {
  const { name, email, step } = req.body;

  console.log("New Interest Received:");
  console.log(name, email, step);

  res.json({
    message: "Interest received successfully"
  });
});

app.listen(10000, () => {
  console.log("Server running on port 10000");
});