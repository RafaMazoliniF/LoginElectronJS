-- Criação da tabela login
CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Inserção de valores de exemplo
INSERT INTO login (username, password) VALUES ('usuario1', 'senha1');
INSERT INTO login (username, password) VALUES ('usuario2', 'senha2');
INSERT INTO login (username, password) VALUES ('usuario3', 'senha3');
