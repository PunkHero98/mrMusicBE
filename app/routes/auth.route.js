import express from "express";
import authController from "../controllers/auth.controller.js";
import {
  protect,
  validateLogin,
  validateRegister,
  verifyUserCredentials,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", validateRegister, authController.register);
router.post(
  "/login",
  validateLogin,
  verifyUserCredentials,
  authController.login
);

router.get("/me", protect, authController.getCurrentUser);

export default router;
