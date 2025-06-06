import express from "express";
import songController from "../controllers/song.controller.js";

const router = express.Router();

router.get("/", songController.getAll);
// router.get("/:id", songController.getById);

export default router;
