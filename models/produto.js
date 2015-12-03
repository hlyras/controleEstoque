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

Produto.mostrarProduto = function(nome){
  var objTabela = document.getElementById("produtos");
  var html = "<tr><td>Nome</td>s<td>Nota1</td><td>Nota2</td><td>Media</td><td>Situação</td><td>Alterar</td><td>Excluir</td></tr>";
  for(i=0; i< Aluno.dados.length; i++){
    var a = Aluno.dados[i];
    console.log("============mostrarProduto============");
    console.log(a.nome);
    if(a.nome == nome){
      html += "<tr>";
      html += "<td>" + a.nome       +  "</td>";
      html += "<td>" + a.nota1      +  "</td>";
      html += "<td>" + a.nota2      +  "</td>";
      html += "<td>" + a.mediaAluno +  "</td>";
      html += "<td>" + a.situacao   +  "</td>";
      html += "<td> <a href='javascript:buscarAluno("+a.id + ")'> alterar </a> </td>";
      html += "<td> <a href='javascript:excluirAluno("+a.id + ")'> excluir </a> </td>";
      html += "</tr>";
    }
  }
  objTabela.innerHTML = html;
}

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
      console.log(c.nome)
      Produto.mostrarProduto(nome);

    }
  }
}

module.exports = Produto;