console.log(typeof console)
console.log(Math.floor(6.1))

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Pão')
const obj3 = new Obj('Manteiga')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

/*
notação ponto:
acessamos membros de um objeto/função assim como console.log

*/