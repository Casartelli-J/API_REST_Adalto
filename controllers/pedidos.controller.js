import db from "../BD/database.js";

export const getPedido = async (req, res) => {
    const {id} = req.query;

    let sql = "SELECT p.* FROM pedidos p WHERE 1 "
    let params = [];

    if(id){
        sql += " AND p.id = ? ";
        params.push(id);
    }

    const [rows] = await db.query(sql, params);
    res.status(200).json(rows);
}

export const postPedido = async (req, res) => {
    const {horario, endereco, cliente} = req.body;
    const sql = "INSERT INTO pedidos(horario, endereco, cliente_id) VALUES (?, ?, ?)";
    if(horario && cliente){
        const [post] = await db.query(sql, [horario, endereco, cliente])
        res.status(201).json(`Pedido: realizado com sucesso!`)
    }else{
        res.status(404).json("Dados mínimos não preenchidos");
    }
}

export const deletePedido = async (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM pedidos WHERE id = ?";

    const [del] = await db.query(sql, [id])
    if(del.affectedRows === 0){
        res.status(404).json("Pedido não encontrado/não existente");
    }else{
        res.status(200).json("Pedido deletado com sucesso!");
    }
}

export const putPedido = async (req, res) => {
    const {id} = req.params;
    const {horario, endereco, cliente} = req.body;
    const sql = "UPDATE pedidos SET horario = ?, endereco = ?, cliente = ? WHERE id = ?";

    const [del] = await db.query(sql, [horario, endereco, cliente, id]);
    if(del.affectedRows === 0){
        res.status(404).json("Pedido não encontrado/não existente");
    }else{
        res.status(200).json("Pedido atualizado com sucesso!");
    }
}