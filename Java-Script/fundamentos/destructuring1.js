// novo recurso do ES2015

//----- objeto: -----//
const pessoa = {  
    nome: 'kathrine',
    idade: 25,
    pele: 'pardo',
    endereco: {
        logadouro: 'Rua ABC',
        numero: 125
    }
}
console.log( pessoa)

//---- destructuring: ------/
    //tirar de uma estrutura, tire de dentro do objeto pessoa o nome
    //e a idade mas n deleta ele so copia e cola em outro variavel -_-
    const { nome, idade } = pessoa
    console.log(nome, idade) //kathrine 25
    console.log( pessoa)

  