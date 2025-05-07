import { Router } from "express";
import userRouter from "./user.route.js";

const RootRouter = Router();

RootRouter.use("/users", userRouter);

export default RootRouter;