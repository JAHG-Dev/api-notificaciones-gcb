import { Router } from "express";
import * as NotificacionesController from "../controllers/notificaciones.controller.js";

const router = Router();

router.post("/", (req, res) => {
    NotificacionesController.sendNotification(req, res);
});

export default router;