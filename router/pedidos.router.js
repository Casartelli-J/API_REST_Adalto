import * as pedido from "../controllers/pedidos.controller.js";
import { Router } from "express";

export const pedidoRouter = Router();

pedidoRouter.get("/", pedido.getPedido);
pedidoRouter.post("/", pedido.postPedido);
pedidoRouter.delete("/adm/:id", pedido.deletePedido);
pedidoRouter.put("/adm/:id", pedido.putPedido);
