// usando notação literal -> difernte de JSon
const obj1 = {}
console.log(obj1)

//obj em js (operador new)
console.log(typeof Object, typeof new Object)//funçao construtora
const obj2 = new Object
console.log(obj2)

// funcoes contrutoras obj js e construtora é quaase a mesma coisa
function Produto(nome, preco, desc){// fiicam encapsulados
    this.nome = nome // vai ficar visivel pra fora do caso vc comsegue mudar
    this.getPrecoDesconto = () => {//metodo publico, funçao
        return preco * (1 - desc)// encapsulados
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15) // vc consegue acessar nome, mas preço e desconto nao, pq vc so consegue acessar ele atravez do getPrecoDesconto, pois so fia acessivel a ele
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto)

// função factory (função q fabrica alguma coisa) no caso um obj
function criarFuncionario(nome, salarioBase, faltas){
    return {//abre-se um obj literal
        nome,
        salarioBase,
        faltas,
        getSalario(){ //função
            return( salarioBase /30)*(30-faltas) //1 dia
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// função create ainda nao estudada Objct.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funsao famosa que retorna um objeto ... (ainda nao estudada)
const fromJSON = JSON.parse('{info:":"Sou um JSON"}')// transformar um JSON em obj
console.log(fromJSON.info)