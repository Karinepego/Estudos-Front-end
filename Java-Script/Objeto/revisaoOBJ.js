// coleção dinamica de pares chave valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca de produto'] = 'Genetica' 
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: { // um obj dentro de obj
        nome:'Raul',
        idade: 56,
        endereco:{
            logadouro: 'Rua ABC',// um obj dentro de obj, dentro de obj
            numero: 123
        }
    },
    condutores: [{  //array de objetos
        nome: 'Junior',//obj 1
        idade: 19
    }, {
        nome:'Ana',// obj 2
        idade:42
    }],
    calcularValorSeguro: function(){ // 
        // ...
    }

}

carro.propietario.endereco.numero = 1000 //ta difinindo o numero como mil
carro['propietario']['endereco']['logadouro'] = 'Av gigante' //?? nao entendi, entendi q logadouro mudou,nao entendi o pq acessar ele dessa foma se o de cima ja é bom
console.log(carro)

// delete carro condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // se excluido(linha41) o resultado da undefined
console.log(carro.condutores.length)// se apagado pode vir a dar erro 