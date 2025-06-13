import { Router } from "express";
import * as productCategoriesController from "../controllers/productCategoriesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get(
  "/",
  authMiddleware,
  productCategoriesController.getAllproductCategories
);
router.get(
  "/:id",
  authMiddleware,
  productCategoriesController.getproductCategoriesById
);
router.post(
  "/",
  authMiddleware,
  productCategoriesController.createproductCategories
);
router.put(
  "/:id",
  authMiddleware,
  productCategoriesController.updateproductCategories
);
router.delete(
  "/:id",
  authMiddleware,
  productCategoriesController.deleteproductCategories
);

export default router;
