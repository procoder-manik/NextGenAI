const mongoose = require("mongoose");
const dns = require("dns");

async function connectWithUri(uri) {
  return mongoose.connect(uri, {
    serverSelectionTimeoutMS: 15000,
    socketTimeoutMS: 45000,
  });
}

module.exports = async function connectDatabase() {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required");

  const uri = process.env.MONGO_URI.trim();
  try {
    await connectWithUri(uri);
    console.log("MongoDB connected");
    return;
  } catch (primaryError) {
    console.error("MongoDB primary connection failed:", primaryError.message);

    if (uri.startsWith("mongodb+srv://") && primaryError.message.includes("querySrv")) {
      console.log("Retrying MongoDB SRV lookup with public DNS servers...");
      dns.setServers(["1.1.1.1", "8.8.8.8"]);
      try {
        await connectWithUri(uri);
        console.log("MongoDB connected after SRV DNS retry");
        return;
      } catch (retryError) {
        console.error("MongoDB retry failed:", retryError.message);
      }
    }

    if (process.env.MONGO_URI_FALLBACK) {
      console.log("Attempting fallback MongoDB URI...");
      try {
        await connectWithUri(process.env.MONGO_URI_FALLBACK.trim());
        console.log("MongoDB connected with fallback URI");
        return;
      } catch (fallbackError) {
        console.error("MongoDB fallback connection failed:", fallbackError.message);
      }
    }

    throw primaryError;
  }
};
