const ApiError = require("../utils/ApiError");
exports.notFound = (req, _res, next) => next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
exports.errorHandler = (error, _req, res, _next) => { const status = error.statusCode || (error.name === "ValidationError" ? 400 : 500); res.status(status).json({ success: false, message: error.message || "Internal server error", details: error.details }); };
