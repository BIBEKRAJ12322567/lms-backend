import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dbConnect from "./config/db.js";
import userRouter from "./routers/userRoute.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Routes
app.use("/api/users", userRouter);

// Start Server
const startServer = async () => {
  await dbConnect();
  app.listen(process.env.PORT || 8080, () =>
    console.log("Server Started 🚀")
  );
};

startServer();