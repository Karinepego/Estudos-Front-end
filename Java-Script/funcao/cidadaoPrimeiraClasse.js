// function em JS é first-Class Object 
// Higher-order function

//criar de forma literal
function fun1(){}

//Armazenar em uma variavel 
const fun2 = [function(a, b){ return a + b}, fun1, fun2]
console.log(Array[0](2, 3))

//Armazenar função em um atributo de objeto 

const obj = {} // criei o objeto
obj.falar = function(){ return 'opa!'}
/*falar é a criação de um atributo ao obj, que recebeu uma
função (function) que retorna a ''fala'' opa*/
console.log(obj.falar()) // cria/chama a função de dentro do objeto


//passar função como parametro 
function run(fun){
    fun()
}

run(function() {console.log('executando...')})

//uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a+b+c)
    }
}

soma (2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)