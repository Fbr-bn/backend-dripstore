import { Router } from "express";
import * as produtoController from "../controllers/produtoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", produtoController.getAllProdutos);
router.get("/:id", produtoController.getProdutoById);
router.post("/", produtoController.createProduto);
router.put("/:id", produtoController.updateProduto);
router.delete("/:id", produtoController.deleteProduto);

export default router;
