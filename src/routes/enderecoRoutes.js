import { Router } from "express";
import * as enderecoController from "../controllers/enderecoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, enderecoController.getAllEnderecos);
router.get("/:id", authMiddleware, enderecoController.getEnderecoById);
router.post("/", authMiddleware, enderecoController.createEndereco);
router.put("/:id", authMiddleware, enderecoController.updateEndereco);
router.delete("/:id", authMiddleware, enderecoController.deleteEndereco);

export default router;
