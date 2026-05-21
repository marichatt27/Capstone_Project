import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
process.env.DB_URL = process.env.MONGO_URI;

import { userApp } from "./API/userAPI.js";
import { adminApp } from "./API/adminAPI.js";
import { authorApp } from "./API/authorAPI.js";
import { commonApp } from "./API/commonAPI.js";

config();

const app = exp();

app.use(exp.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "https://capstone-project-olive-omega.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use("/user-api", userApp);
app.use("/admin-api", adminApp);
app.use("/author-api", authorApp);
app.use("/common-api", commonApp);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log("Server running");
    });
  })
  .catch((err) => console.log("DB error:", err));