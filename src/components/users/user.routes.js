// importar el router de express
import { Router } from "express";
import { getAllUsers } from "./user.controllers.js";

// crear la instacia del Router
const router = Router();

router.get("/users", getAllUsers);

export default router;
