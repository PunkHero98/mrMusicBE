import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get("/", userController.getAll);
userRouter.get("/:id", userController.getById);

userRouter.post("/", userController.create);

export default userRouter;