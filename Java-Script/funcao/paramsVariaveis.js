function soma(){
    let soma = 0
    for (i in arguments){// argumenst é uma palavra reservada, o q ela faz??
        soma += arguments[i]
    }
    return soma
}
/*
arguments é um um objeto em que recebe todos
os parâmetros que são passados pela função. 
Com isso, quando você passa os parâmetros,
o for percorre todos os parâmetros de 
arguments e com isso, faz a soma.
*/
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))