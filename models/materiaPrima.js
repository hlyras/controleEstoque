var MateriaPrima = function(){
	this.id;
	this.nome;
	this.descricao;
	this.preco;

	this.salvar = function(){
		this.id = (MateriaPrima.dados.length + 1)
		MateriaPrima.dados.push(this)
	}
}

MateriaPrima.dados = []

MateriaPrima.buscar = function(nome){
	for(i=0; i<MateriaPrima.dados.length; i++){
		var c = MateriaPrima.dados[i];
		if(c.nome == nome){
			return c;
		}
	}
}