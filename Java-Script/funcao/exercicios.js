/*1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. 

function calculos (a,b) {
    return {
        soma: a+b,
        subtracao: a-b,
        multiplicacao: a*b,
        divisao: a/b
    }
}

console.log(`soma dos valores: ${calculos(2,2).soma}`);
console.log(`sustração dos valores: ${calculos(2,2).subtracao}`);
console.log(`multiplicação dos valores: ${calculos(2,2).multiplicacao}`);
console.log(`divisão dos valores: ${calculos(2,2).divisao}`);
*/


/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 

function triangulos(L1, L2, L3){
    if ((L1 === L2) && (L2 === L3) && (L3 === L1)) {
        resp = "Equilátero, os 3 lados são iguais";
    }else if ((L1 == L2) || (L2 == L3) || (L3 == L1)) {
        resp = "Isóceles, dentre os 3, 2 lados são iguais";
    }else {
        resp = "Escaleno, todos sao diferentes";
    }
return resp
}

console.log(triangulos(4,4,4)) //equi
console.log(triangulos(2,4,4)) //isó
console.log(triangulos(4,6,7)) //esca
*/

/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente 

 function calculo(base, expoente){
    //return Math.pow(base,expoente);
    return base ** expoente// ambos funcionam esse é novo
 }

 console.log(calculo(10,3));*/

 /*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.


  function resultadoDivisao(dividendo, divisor){
        console.log("Dividendo: "+ dividendo + " \nDivisor: " + divisor )
    let quociente = dividendo / divisor
        console.log("\nO resultado da divisão é: "+ quociente)
    let resto = dividendo % divisor
        console.log("O resto da divisão é: "+ resto)

        //console.log("Resultado: " + Math.floor(dividendo/divisor));
        //console.log(`Resto: ${dividendo % divisor}`)
  }

resultadoDivisao(22,4)*/

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 

function dinheiroPontoVirgula(valorReais){
    console.log(`R$ ${valorReais.toFixed(2).toString().replace(".",",")}`)
}

dinheiroPontoVirgula(0.30000000000000004)
dinheiroPontoVirgula(13.45571246465651468)
dinheiroPontoVirgula(1574.5412)*/

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 

function jurosSimples(capInicial, taxJuros, TempoAplicacao){
        let montante = capInicial + (capInicial * taxJuros * TempoAplicacao)
    console.log(`Montante do Juros Simples: R$ ${montante.toFixed(2).toString().replace(".",",")}`)
}

function jurosCompostos(capInicial, taxJuros, TempoAplicacao){
        let montante = (capInicial * (1+taxJuros)**TempoAplicacao)
    console.log(`Montante do Juros Compostos: R$ ${montante.toFixed(2).toString().replace(".",",")}`)
}

jurosSimples(3000,3/100,2)
jurosCompostos(3000,3/100,2) */

/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.//
 

function baska(ax2, bx, c){
  let delta = (bx ** 2) - (4 * ax2 * c)
        if (delta < 0) {
            return "Valor delta invalido"
        }

        let X1 = (-bx + Math.sqrt(delta)) / (2*ax2)
        let X2 = (-(bx) - Math.sqrt(delta)) / (2*ax2) 

        console.log(X1)
        console.log(X2)

        /* - esqueci do array
         let resultados = []
         resultados.push(x1)
         resultados.push(x2)
        //
 }

baska(1,3,2)*/

/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

function divisivel(x){
    if(x % 3 == 0){
        return true
    }else{
        return false
    }
}
console.log(divisivel(18))
*/

/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
 */ 
