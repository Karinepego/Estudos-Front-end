function getINteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
//let opcao = -1

while (opcao != -1){
    opcao = getINteiroAleatorioEntre(-1, 10)
    console.log('opção escolhida foi '+ opcao +'.');
   // console.log('opção escolhida foi' ,${opcao} ,'.'); nao quer funcionar n sei pq /
   // descobri  pq n funcionou vc tem que usar o ´´ e nao ''
}

console.log('Ate a proxima!')