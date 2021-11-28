// pessoa -> 123hex -> {...} pessoa aponta pra endereço q aponta pro obj na memoria
const pessoa = { Nome: "Joao"} // ela é constate por isso o ponteiro unca vai mudar e se vc tentar ira dar um erro 
pessoa.nome = 'Pedro'// da certo.
console.log(pessoa)// pedro: a referencia continua apontando pra 123, mas o obj ele pode ser alterado oq nao pode mudar é a constante pessoa

//pessoa -> 456hex -> {...} 
//pessoa = { nome: 'Ana' } erro pois vc tenta alterar algo constante quer fazer ele mudar de endereço

Object.freeze(pessoa)// congelo o obj vc nao consegue mexer nele

pessoa.name = "Marina" //ignorado
pessoa.end = 'Rua ABC' //ignorado
delete pessoa.nome     //ignorado


console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({ nome: "João"})// aqui tbm nada pode ser alterado
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)
