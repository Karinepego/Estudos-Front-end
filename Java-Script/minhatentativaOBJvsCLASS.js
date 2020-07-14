var Pessoa = function(nome) { //classe/function
    this.nome = nome;
    console.log('forma de bolo');
  };
  
  var pessoa1 = new Pessoa('Alice');// objeto
  var pessoa2 = new Pessoa('Bob'); //objeto 
  
  // mostrando as propriedades nome dos objetos criados 
  console.log('pessoa1 - o bolo de morango- ' + pessoa1.nome); // 
  console.log('pessoa2 - o bolo de chocolate- ' + pessoa2.nome); // 




  /*
  var Cliente = function(nome) {
    this.nome = nome;
    console.log("forma de bolo ")
}

var cliente1 = new cliente("karine");
var cliente2 = new cliente("bob"); */