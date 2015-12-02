var Produto = function(){
  this.nome;
  this.preco;
  this.qtdMin;
  this.undMedida;
  this.tipo;

  this.salvar = function(){
    this.id = (Produto.dados.length + 1);
    Produt.dados.push(this)
  }
}

Produto.dados = [];





module.exports = Produto;




