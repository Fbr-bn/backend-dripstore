import { Router } from "express";
import * as clienteController from "../controllers/clienteController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

//Rotas para clientes

//trazer todos os clientes
router.get("/", authMiddleware, clienteController.getAllClientes);
//traz o cliente pelo id
router.get("/:id", authMiddleware, clienteController.getClienteById);
//cria um novo cliente
router.post("/", authMiddleware, clienteController.createCliente);
//atualiza dados do cliente
router.put("/:id", authMiddleware, clienteController.updateCliente);
//deleta o cliente
router.delete("/:id", authMiddleware, clienteController.deleteCliente);

export default router;
