var Produto = function(){
  this.id;
  this.nome;
  this.descricao;

  this.salvar = function(){
    this.id = (Produto.dados.length + 1);
    Produto.dados.push(this)
  }

  this.buscar = function(){
    
  }
}

Produto.dados = [];

Produto.buscarPorId = function(id){
  for(i=0; i<Produto.dados.length; i++){
    var c = Produto.dados[i];
    if(c.id == id){
      return c;
    }
  }
}

Produto.buscar = function(nome){
  for(i=0; i<Produto.dados.length; i++){
    var c = Produto.dados[i];
    if(c.nome == nome){
      console.log("===========BuscarPorNome========")
      console.log(c)
      return c;
    }
  }
}

module.exports = Produto;