const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");

const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());
const analysisRoutes = require("./routes/analysis");
app.use("/api/analysis", analysisRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("Unable to connect to database:", err);
  }
});
