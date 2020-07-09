console.log(typeof Object)
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())




/*Uma atribuição de uma função é um object cujos
 atributos e comportamentos são definidos por 
 essa funçtion. Fazendo um paralelo com a vida real 
 uma function/fôrma de 
 bolo e cada bolo que é feito com ela seria uma 
 instância dessa function/fôrma, entendeu?

Trazendo novamente para a programação, se
 eu tenho uma class (que em javascript é uma função)
  chamada Carro. Essa classe tem como atributos, 
  modelo, ano, velocidade máxima. E à partir dessa
   função eu crio um carro cujo modelo é gol,
    ano 2019, velocidade máxima 160 km/h, e também 
    crio um carro cujo modelo é logan, ano é 2018, 
    velocidade máxima 150 km/h. O gol é uma instância
     de carro e o Logan é outra instância de carro.*/