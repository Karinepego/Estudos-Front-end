console.log(typeof console)
console.log(Math.floor(6.1))

const obj1 = {} //criando um obj1 com att .nome
obj1.nome = 'bola'
//obj1['nome'] = 'bola2' 
console.log(obj1.nome)

function Obj(nome, idade ) { //criando um obj 
    this.nome = nome
    this.idade = idade
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('pao')
const obj3 = new Obj('Manteiga')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

/*
notação ponto:
acessamos membros de um objeto/função assim como console.log

*obj1['nome'] = 'bola2" 
    tbm funciona pq vc pode acessar um obj artavez de um 
    texto/string o q e bom porem nao tao recomendavel 
    poruqe vc vai ter que escrever daquele jeito certinho 
    durante o codigo todo e isso n facilita 

*/

