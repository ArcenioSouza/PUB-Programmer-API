import { Router } from "express";
import DrinksController from "../controller/DrinksController.js";

const router = Router();

router
  .get("/drinks", DrinksController.getDrinks)
  .get("/drinks/:id", DrinksController.getDrinksById)
  .delete("/drinks/:id", DrinksController.deleteDrink)
  .put("/drinks/:id", DrinksController.updateDrink)
  .post("/drinks", DrinksController.postDrink);

export default router;
