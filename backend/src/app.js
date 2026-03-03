const express = require("express");
const authRoute = require("./routes/auth.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());

// CORS should be applied before routes
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5137",
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5137",
    ],
    credentials: true,
  })
);

app.use("/api/auth", authRoute);

module.exports = app;