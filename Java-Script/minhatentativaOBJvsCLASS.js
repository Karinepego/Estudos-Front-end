var Pessoa = function(nome) { //classe/function
    this.nome = nome;
    console.log('forma de bolo');
  };
  
  var pessoa1 = new Pessoa('Alice');// objeto
  var pessoa2 = new Pessoa('Bob'); //objeto 
  
  // mostrando as propriedades nome dos objetos criados 
  console.log('pessoa1 - o bolo de morango- ' + pessoa1.nome); // 
  console.log('pessoa2 - o bolo de chocolate- ' + pessoa2.nome); // 


  console.log(typeof this) //notação ponto 
  console.log(typeof console)



//----------------------------------------------------------------------//
function Book (type, author) {
  this.type = type;
  this.author = author;
  this.getDetails = function () {
      return this.type + " written by " + this.author;
  }
}
var book = new Book("Fiction", "Peter King");
console.log(book.getDetails());        // => Fiction written by Peter King

//----------------------------------------------------------------------//

let obj = {
  cat: 'meow',
  dog: 'woof'
};
let sound = obj.dog;
// or to call the cat let sound = obj.cat;
console.log(sound);
// meow

//----------------------------------------------------------------------//





