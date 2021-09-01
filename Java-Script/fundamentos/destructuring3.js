// função que tem objietivo de gerar valores randomicos 

function rand({min = 0, max= 1000}) {
    //função dentro de um operador distruct q é chaves
    //vou paqssar um obj pra  função e a função me retorne o obj pronto
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}  
console.log(rand(obj)) // mostra os randomicos da funcçao  entre 50 e 40

console.log(rand({min: 955})) // mostra os ran dentre 955 ate 1000

console.log(rand({})) // obj vazio fica nevegando entr 0 e 1000

//console.log(rand()) // da errado
