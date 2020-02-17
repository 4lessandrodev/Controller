const express = require('express');
const app = express();
const port = 3000;
const hostname = 'localhost';
const backlog = () => console.log(`Servidor rodando na porta ${port}`);
const ProdutoController = require('./controllers/ProdutoController');

app.get('/produto/cadastrar', ProdutoController.criarProduto);
app.get('/produto', ProdutoController.exibirProduto);

app.listen(port, hostname, backlog());
