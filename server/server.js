require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./src/config/db");
const { apiLimiter } = require("./src/middlewares/rateLimiter");
const { notFound, errorHandler } = require("./src/middlewares/errorMiddleware");

const app = express();
app.use(helmet()); app.use(compression()); app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true })); app.use(express.json({ limit: "1mb" })); app.use(cookieParser()); app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev")); app.use("/api", apiLimiter);
app.get("/api/health", (_req, res) => res.json({ success: true, message: "NextGenAI API is healthy" }));
app.use("/api/auth", require("./src/routes/authRoutes")); app.use("/api/services", require("./src/routes/serviceRoutes")); app.use("/api/blogs", require("./src/routes/blogRoutes")); app.use("/api/contact", require("./src/routes/contactRoutes"));
app.use(notFound); app.use(errorHandler);
const port = Number(process.env.PORT) || 5000;
connectDatabase().then(() => app.listen(port, () => console.log(`API listening on port ${port}`))).catch((error) => { console.error("Database connection failed", error.message); process.exit(1); });
