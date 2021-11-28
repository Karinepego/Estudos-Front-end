function getINteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!

do {
    opcao = getINteiroAleatorioEntre(-1, 10)
    console.log('opção escolhida foi '+ opcao +'.');
} while (opcao != -1)

console.log('Ate a proxima!')