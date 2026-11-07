
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Health check API
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LandVision API is running!"
  });
});

app.listen(PORT, () => {
  console.log(`LandVision server running on port ${PORT}`);
});
