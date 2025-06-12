import { Router } from "express";
import * as optionController from "../controllers/optionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, optionController.getAllOptions);
router.get("/:id", authMiddleware, optionController.getOptionById);
router.post("/", authMiddleware, optionController.createOption);
router.put("/:id", authMiddleware, optionController.updateOption);
router.delete("/:id", authMiddleware, optionController.deleteOption);

export default router;
