import { Router } from "express";
import SupplierControllers from "../controller/SuppliersController.js";

const router = Router();

router
  .get("/suppliers", SupplierControllers.getSuppliers)
  .get("/suppliers/:id", SupplierControllers.getSuppliersById)
  .delete("/suppliers/:id", SupplierControllers.deleteSupplier)
  .put("/suppliers/:id", SupplierControllers.updateSupplier)
  .post("/suppliers", SupplierControllers.postSupplier);

export default router;
