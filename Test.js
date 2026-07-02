require("dotenv").config();
const mongoose = require("mongoose");

async function testConnection() {
  try {
    console.log("MONGO_URI:");
    console.log(
      process.env.MONGO_URI.replace(/\/\/(.*?):(.*?)@/, "//****:****@")
    );

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("\n✅ MongoDB Connected Successfully!");
    console.log("Database:", conn.connection.name);
    console.log("Host:", conn.connection.host);
    console.log("Ready State:", mongoose.connection.readyState);

    await mongoose.disconnect();
    console.log("✅ Connection Closed");
  } catch (error) {
    console.error("\n❌ Connection Failed");
    console.error("Name:", error.name);
    console.error("Message:", error.message);
    console.error("Code:", error.code || "N/A");
    console.error(error);
  }
}

testConnection();