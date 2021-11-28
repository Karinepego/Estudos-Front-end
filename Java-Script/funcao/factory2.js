function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('Notebook',2545.00))
console.log(criarProduto('Ipad', 1543.00))