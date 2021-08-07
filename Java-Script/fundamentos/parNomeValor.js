//par nome/valor

const saudacao = "opa" //contexto lexico 1

function exec() {
    const saudacao = "fala ae pc tudo bom?" //contexto lexico 2 
     return saudacao
}

/*duas variais de nomes iguais em constextos diferentes
nao da erro pois uma pertence ao escopo global e a
outra pertence ao escopo exc (function) */

// objetos sao grupos alinhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        lougadouro:"Rua Muiro Rocha",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)