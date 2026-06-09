import "dotenv/config";
import express from "express";
import cors from "cors";
import { clienteRouter } from "./router/clientes.router.js";
import { produtoRouter } from "./router/produtos.router.js";
import { pedidoRouter } from "./router/pedidos.router.js";
import { PedProdRouter } from "./router/pedidos_produtos.router.js";

export function createApp(){
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use("/clientes", clienteRouter);
    app.use("/produtos", produtoRouter);
    app.use("/pedidos", pedidoRouter);
    app.use("/pedidos_produtos", PedProdRouter);

    return app;
}