var express = require('express');
var router = express.Router();
var Produto = require('../models/Produto')

/* GET home page. */
router.get('/', function(req, res, next) {
  var produtos = Produto.dados
  res.render('index', { 
    title: 'Controle de Estoque',
     });

router.post('/produto/salvar'), function(req, res, next){
  var produto = new Produto();
  produto.nome = req.body.nomeProduto;
  produto.nome = req.body.precoProduto;

  if(req.body.id == ""){
    produto.salvar();
  }

  res.redirect("/");
});

module.exports = router;
