console.log(typeof console)
console.log(Math.floor(6.1))

const obj1 = {} //criando um  objeto obj1 com att .nome
obj1.nome = 'bola'
//obj1['nome'] = 'bola2' 
console.log(obj1.nome)

function Obj(nome, idade ) { //criando uma classe
    this.nome = nome
    this.idade = idade
    this.exec = function() { // isso é o metodo da classe
        console.log('Exec...')
    }
}

const obj2 = new Obj('pao')
const obj3 = new Obj('Manteiga')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())
//ou obj3.exec() sozinho tbm funciona 

/*
notação ponto:
acessamos membros de um objeto/função assim como console.log

*obj1['nome'] = 'bola2" 
    tbm funciona pq vc pode acessar um obj artavez de um 
    texto/string o q e bom porem nao tao recomendavel 
    poruqe vc vai ter que escrever daquele jeito certinho 
    durante o codigo todo e isso n facilita 

*/

