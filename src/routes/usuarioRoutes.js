import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

//Rotas para usuarios

//trazer todos os usuarios
router.get("/", authMiddleware, usuarioController.getAllUsuarios);
//traz o usuario pelo id
router.get("/:id", authMiddleware, usuarioController.getUsuarioById);
//cria um novo usuario
router.post("/", authMiddleware, usuarioController.createUsuario);
//atualiza dados do usuario
router.put("/:id", authMiddleware, usuarioController.updateUsuario);
//deleta o usuario
router.delete("/:id", authMiddleware, usuarioController.deleteUsuario);

export default router;
