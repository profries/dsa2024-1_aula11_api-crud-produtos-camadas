const express = require('express');
const app = express();
const PORTA = 3000;

const produtoController = require('./controller/produto_controller');

app.use(express.json()) // for parsing application/json

app.get("/produtos", produtoController.listar);
app.post("/produtos", produtoController.inserir);
app.get("/produtos/:id", produtoController.buscarPorId);

app.listen(PORTA, ()=> {
    console.log("Iniciando o servidor na porta "+PORTA);
})
