import express from "express";
import morgan from "morgan";

import * as ENV from "./config.js";
import notificacionesRoutes from "./routes/notificaciones.routes.js";

const app = express();

app.set("port", ENV.PORT);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("https://gcb.com.mx/");
});

app.use("/api/notificaciones/telegram", notificacionesRoutes);

export default app;