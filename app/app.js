import express from "express";
import cors from "cors";
import RootRouter from "./routes/index.js";
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", RootRouter);

export default app;
