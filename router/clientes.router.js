import * as cliente from "../controllers/clientes.controller.js";
import { Router } from "express";

export const clienteRouter = Router();

clienteRouter.get("/", cliente.getCliente);
clienteRouter.get("/ConsultaProdutos", cliente.getProduto);
clienteRouter.post("/", cliente.postCliente);
clienteRouter.delete("/adm/:id", cliente.deleteCliente);
clienteRouter.put("/adm/:id", cliente.putCliente);

