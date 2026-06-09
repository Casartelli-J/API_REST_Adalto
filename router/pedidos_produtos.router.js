import * as pedido_produto from "../controllers/pedidos_produtos.controller.js";
import { Router } from "express";

export const PedProdRouter = Router();

PedProdRouter.get("/PedidosRealizados", pedido_produto.getPedProd);
PedProdRouter.post("/RealizarPedido", pedido_produto.postPedProd);
PedProdRouter.delete("/adm/:id", pedido_produto.delPedProd);
PedProdRouter.put("/adm/:id", pedido_produto.putPedProd);
