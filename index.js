import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dbConnect from "./config/db.js";
import userRouter from "./routers/userRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use("/api/users", userRouter);

const startServer = async () => {
  await dbConnect();

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
  });
};

startServer();