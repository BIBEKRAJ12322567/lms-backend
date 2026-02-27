import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/db.js";
import userRouter from "./routers/userRoute.js";

dotenv.config();

const app = express();//

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.use("/api/users", userRouter);

// Connect DB (IMPORTANT)
dbConnect();

// ❌ REMOVE app.listen()
// ✅ EXPORT app instead
export default app;