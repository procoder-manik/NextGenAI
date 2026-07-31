const mongoose = require("mongoose");
const dns = require("dns");

module.exports = async function connectDatabase() {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required");
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
};
