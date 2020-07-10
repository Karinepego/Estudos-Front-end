console.log(typeof Object)
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())


//em minhas palavras: classe carro é a Mãe do filho gol e filho logan...
//foi ela quem disse pra eles q eles são um carro assim como ela, e nao um avião
// e disse a eles q eles  precisam daqueles 
//metodos e atributos pra ser um carro de verdade quando crescer! :D


//O closure   ??????????
//(ou função como valor) é um comportamento 
//com um estado anexado a ele

let pessoa = { //abriu chaves abriu um objeto
     nome: "karine",
     cpf: "10000",
     olhos: "castanho",

     andar: function() { //isso é os metodos 
          return console.log('andou')
     }

     falar: function() { //isso é os metodos 
          return console.log('falou')
     }
}






