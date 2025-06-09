import { Router } from "express";
import * as pedidoController from "../controllers/pedidoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, pedidoController.getAllPedidos);
router.get("/:id", authMiddleware, pedidoController.getPedidoById);
router.post("/", authMiddleware, pedidoController.createPedido);
router.put("/:id", authMiddleware, pedidoController.updatePedido);
router.delete("/:id", authMiddleware, pedidoController.deletePedido);

export default router;
