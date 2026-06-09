import db from "../BD/database.js";

export const getPedProd = async (req, res) => {
    const {pedidoId} = req.query
    const {prodId} = req.query
    let sql = "SELECT * FROM pedidos_produtos WHERE 1 ";
    let params = [];
    if(pedidoId){
        sql += " AND pedidoId = ?";
        params.push(pedidoId);
    }

    if(prodId){
        sql += " AND prodId = ?";
        params.push(prodId);
    }

    const [rows] = await db.query(sql, params);
    res.status(200).json(rows);
}

export const postPedProd = async (req, res) => {
    const {pedidoId, produtoId, preco, quantidade} = req.body;
    const sql = "INSERT INTO pedidos_produtos(pedido_id, produto_id, preco, quantidade) VALUES (?, ?, ?, ?)";

    if(pedidoId && produtoId){
        const [post] = await db.query(sql, [pedidoId, produtoId, preco, quantidade]);
        res.status(201).json(`Pedido: ${pedidoId} realizado com sucesso!`)
    }else{
        res.status(404).json("Falha ao realizar o pedido, falta de identificador do pedido ou produto.")
    }
}

export const putPedProd = async (req, res) => {
    const {pedidoId} = req.params;
    const {produtoId, preco, quantidade} = req.body;
    const sql = "UPDATE pedidos_produtos SET produto_id = ?, preco = ?, quantidade = ? WHERE pedido_id = ?";

    const [put] = await db.query(sql, [produtoId, preco, quantidade, pedidoId]);
    if(put.affectedRows === 0){
        res.status(404).json("Falta de identificador do pedido.");
    }else{
        res.status(200).json(`Produto: ${produtoId} atualizado com sucesso!`);
    };
}

export const delPedProd = async (req, res) => {
    const {pedidoId} = req.params;
    const sql = "DELETE FROM pedidos_produtos WHERE pedido_id = ?";

    const [del] = await db.query(sql, pedidoId);
    if(put.affectedRows === 0){
        res.status(404).json("Falta de identificador do pedido.");
    }else{
        res.status(200).json(`Produto: ${produtoId} deletado com sucesso!`);
    };
}