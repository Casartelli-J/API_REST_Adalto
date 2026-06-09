import * as produto from "../controllers/produtos.controller.js";
import { Router } from "express";

export const produtoRouter = Router();

produtoRouter.get("/", produto.getProduto);
produtoRouter.post("/adm", produto.postProduto);
produtoRouter.delete("/adm/:id", produto.deleteProduto);
produtoRouter.put("/adm/:id", produto.putProduto);

