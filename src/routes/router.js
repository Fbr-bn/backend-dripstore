import { Router } from "express";
import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import pagamentoRoutes from "./pagamentoRoutes.js";
import pedidoItemRoutes from "./pedidoItemRoutes.js";
import authRoutes from "./authRoutes.js";
import imageRoutes from "./imageRoutes.js";
import optionRoutes from "./optionRoutes.js";
import productCategoriesRouter from "./productCategoriesRoutes.js";

const router = Router();

router.use("/auth", authRoutes); // testado
router.use("/clientes", clienteRoutes); //testado
router.use("/enderecos", enderecoRoutes); // testado
router.use("/categorias", categoriaRoutes); // testado
router.use("/produtos", produtoRoutes); //testado
router.use("/pedidos", pedidoRoutes); //testado
router.use("/pagamentos", pagamentoRoutes); // testado
router.use("/pedido-itens", pedidoItemRoutes); // testado
router.use("/image", imageRoutes); //testado
router.use("/option", optionRoutes); // testado
router.use("/product", productCategoriesRouter); //testado

export default router;
