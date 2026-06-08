create table cidades(
	id int not null primary key AUTO_INCREMENT,
    nome varchar(50) not null
);

create table categorias(
	id int not null primary key AUTO_INCREMENT,
    nome varchar(100) not null primary key AUTO_INCREMENT
);

create table clientes(
	id int not null primary key AUTO_INCREMENT,
	nome varchar(100) not null,
    altura double,
	nascimento varchar(100),
    cidade int not null,
    FOREIGN KEY (cidade) REFERENCES cidades(id)
);

create table pedidos(
	id int not null primary key AUTO_INCREMENT,
    horario datetime not null,
    endereco varchar(200),
    cliente_id int not null,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

create table produtos(
	id int not null primary key AUTO_INCREMENT,
	nome varchar(100) not null,
    preco double,
    quantidade double,
    categoria int not null,
    FOREIGN KEY (categoria) REFERENCES categorias(id)
);

create table pedidos_produtos(
	pedido_id int not null
