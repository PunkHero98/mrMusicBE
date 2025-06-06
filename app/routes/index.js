import express from "express";
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";
import songRouter from "./song.route.js";

const RootRouter = express.Router();

RootRouter.use("/users", userRouter);
RootRouter.use("/auth", authRouter);
RootRouter.use("/songs", songRouter);

export default RootRouter;
