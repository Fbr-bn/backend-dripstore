import { Router } from "express";
import * as imageController from "../controllers/imageController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, imageController.getAllImages);
router.get("/:id", authMiddleware, imageController.getImageById);
router.post("/", authMiddleware, imageController.createImage);
router.put("/:id", authMiddleware, imageController.updateImage);
router.delete("/:id", authMiddleware, imageController.deleteImage);

export default router;
