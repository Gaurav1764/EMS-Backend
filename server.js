require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

console.log("1. Starting server...");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.scdend("EMS Backend Running");
});

app.use("/api/employees", employeeRoutes);

const startServer = async () => {
  try {
    console.log("2. Connecting MongoDB...");
    await connectDB();

    console.log("3. MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });

    console.log("4. app.listen() executed");
  } catch (err) {
    console.error(err);
  }
};

startServer();