import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  archiveProduct,
  unarchiveProduct
} from "../controllers/productController.js";

const router = Router();

// Rotas públicas
router.get("/", getProducts);

// Rotas protegidas (admin)
router.post("/", authMiddleware, createProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);
router.patch("/archive/:id", authMiddleware, archiveProduct);
router.patch("/unarchive/:id", authMiddleware, unarchiveProduct);

export default router;
