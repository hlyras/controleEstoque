var ProdutoVenda = function(){
	this.id;
	this.descricao;
	this.precoVenda;

	this.salvar = function(){
		this.id = (ProdutoVenda.dados.length + 1);
		ProdutoVenda.dados.push(this);
	}
}

ProdutoVenda.dados = []