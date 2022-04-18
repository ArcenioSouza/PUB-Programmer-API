import { Router } from "express";
import FoodsController from "../controller/FoodsController.js";

const router = Router();

router
  .get("/foods", FoodsController.getFoods)
  .get("/foods/:id", FoodsController.getFoodsById)
  .delete("/foods/:id", FoodsController.deleteFood)
  .put("/foods/:id", FoodsController.updateFood)
  .post("/foods", FoodsController.postFood);

export default router;
