const express = require('express')
const router = express.Router();

const produtoController = require('../controller/produto_controller');

//router: /produtos
router.get("/", produtoController.listar);
router.post("/", produtoController.inserir);
router.get("/:id", produtoController.buscarPorId);

module.exports = router;
