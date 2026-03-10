import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/interest", (req, res) => {
  const { name, email, step } = req.body;

  console.log("New Interest Received:");
  console.log(name, email, step);

  res.json({
    message: "Interest received successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});