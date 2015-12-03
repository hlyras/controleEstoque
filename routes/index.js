var express = require('express');
var router = express.Router();
var Produto = require('../models/produto')

/* GET home page. */
router.get('/', function(req, res, next) {
  var produtos = Produto.dados
  res.render('index', { 
    title: 'Controle de Estoque',
  });
});

router.post('/produto/salvar', function(req, res, next){
  var produto = new Produto();
  produto.nome = req.body.nomeProduto;
  produto.descricao = req.body.descricaoProduto;
  if(req.body.idProduto == ""){
    produto.salvar();
  }
  res.redirect("/");
});

router.get('/produto/buscar', function(req, res, next){
  var nome = req.body.procurarProduto
  console.log("============")
  console.log(nome)
  var produto = Produto.buscar(nome);
})

module.exports = router;
