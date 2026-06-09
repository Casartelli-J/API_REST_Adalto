import db from "../BD/database.js";

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

export const postProduto = async (req, res) => {
    const {nome, preco, quantidade, categoria} = req.body;
    const sql = "INSERT INTO produtos(nome, preco, quantidade, categoria) VALUES (?, ?, ?, ?)";
    if(nome && categoria){
        const [post] = await db.query(sql, [nome, preco, quantidade, categoria])
        res.status(201).json(`Produto: ${nome} cadastrado com sucesso!`)
    }else{
        res.status(404).json("Dados mínimos não preenchidos");
    }
}

export const deleteProduto = async (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM produtos WHERE id = ?";

    const [del] = await db.query(sql, [id])
    if(del.affectedRows === 0){
        res.status(404).json("Produto não encontrado/não existente");
    }else{
        res.status(200).json("Produto deletado com sucesso!");
    }
}

export const putProduto = async (req, res) => {
    const {id} = req.params;
    const {nome, preco, quantidade, categoria} = req.body;
    const sql = "UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, categoria = ? WHERE id = ?";

    const [del] = await db.query(sql, [nome, preco, quantidade, categoria, id]);
    if(del.affectedRows === 0){
        res.status(404).json("Produto não encontrado/não existente");
    }else{
        res.status(200).json("Produto atualizado com sucesso!");
    }
}