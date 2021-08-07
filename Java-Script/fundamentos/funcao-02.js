//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) { //função anonima
    console.log(a+b)
}
imprimirSoma(2, 3)


//Armazenando uma função arrow em uma variavel 
const soma = (a, b) => { //setinha substitui function
     return a + b
}
console.log(soma(2, 3))


//Retorno implicito/reduzido/pequeno
const subtracao = (a, b) => a - b  //a var com nome parametros e retorno
console.log(subtracao(2, 3)) //chamado


const imprimir2 = a => console.log(a) 
imprimir2('Legal!!!')
