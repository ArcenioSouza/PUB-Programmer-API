import { Router } from "express";
import LoginsController from "../controller/LoginsController.js";

const router = Router();

router
  .get("/logins", LoginsController.getLogins)
  .get("/logins/:id", LoginsController.getLoginsById)
  .delete("/logins/:id", LoginsController.deleteLogin)
  .put("/logins/:id", LoginsController.updateLogin)
  .post("/logins", LoginsController.postLogin);

export default router;
