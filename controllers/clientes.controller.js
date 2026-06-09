import db from "../BD/database.js";

export const getCliente = async (req, res) => {
    const {id} = req.query;

    let sql = "SELECT cl.*, ci.nome as cidade FROM clientes cl LEFT JOIN cidades ci ON cl.cidade = ci.id WHERE 1 "
    let params = [];

    if(id){
        sql += " AND cl.id = ? ";
        params.push(id);
    }

    const [rows] = await db.query(sql, params);
    res.status(200).json(rows);
}

export const getProduto = async (req, res) => {
    const {id} = req.query;

    let sql = "SELECT p.*, c.nome as Categoria FROM produtos p LEFT JOIN categorias c ON p.categoria = c.id WHERE 1 "
    let params = [];

    if(id){
        sql += " AND p.id = ? ";
        params.push(id);
    }

    const [rows] = await db.query(sql, params);
    res.status(200).json(rows);
}

export const postCliente = async (req, res) => {
    const {nome, altura, nascimento, cidade} = req.body;
    const sql = "INSERT INTO clientes(nome, altura, nascimento, cidade) VALUES (?, ?, ?, ?)";
    if(nome && cidade){
        const [post] = await db.query(sql, [nome, altura, nascimento, cidade])
        res.status(201).json(`Cliente: ${nome} cadastrado com sucesso!`)
    }else{
        res.status(404).json("Dados mínimos não preenchidos");
    }
}

export const deleteCliente = async (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM clientes WHERE id = ?";

    const [del] = await db.query(sql, [id])
    if(del.affectedRows === 0){
        res.status(404).json("Cliente não encontrado/não existente");
    }else{
        res.status(200).json("Cliente deletado com sucesso!");
    }
}

export const putCliente = async (req, res) => {
    const {id} = req.params;
    const {nome, altura, nascimento, cidade} = req.body;
    const sql = "UPDATE clientes SET nome = ?, altura = ?, nascimento = ?, cidade = ? WHERE id = ?";

    const [del] = await db.query(sql, [nome, altura, nascimento, cidade, id]);
    if(del.affectedRows === 0){
        res.status(404).json("Cliente não encontrado/não existente");
    }else{
        res.status(200).json("Cliente atualizado com sucesso!");
    }
}