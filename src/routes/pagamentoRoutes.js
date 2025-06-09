import { Router } from "express";
import * as pagamentoController from "../controllers/pagamentoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, pagamentoController.getAllPagamentos);
router.get("/:id", authMiddleware, pagamentoController.getPagamentoById);
router.post("/", authMiddleware, pagamentoController.createPagamento);
router.put("/:id", authMiddleware, pagamentoController.updatePagamento);
router.delete("/:id", authMiddleware, pagamentoController.deletePagamento);

export default router;
