import express from "express";

import {
  logarUsuario,
  registrarUsuario,
} from "../controllers/logarUsuario.controller.js";

const route = express.Router();

route.get("/logar", logarUsuario);
route.post("/registrar", registrarUsuario);

export default route;
