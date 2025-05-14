import express from "express";
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";

const RootRouter = express.Router();

RootRouter.use("/users", userRouter);
RootRouter.use("/auth", authRouter);

export default RootRouter;
