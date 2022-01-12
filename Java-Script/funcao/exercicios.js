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
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
 

function classificaoAluno(notaPrincipal){
    let notaArredondada
    if(notaPrincipal >= 40){ 
        return console.log("voce foi aprovado")
    }else{

        return console.log("voce foi reprovado")
    }
}

function calculaNota(notaPrincipal){
    if (notaPrincipal % 5 > 2) { //multiplos de 5 = divididos por 5, resultam em uma divisão exata e sem resto
        return notaPrincipal + (5 - (notaPrincipal % 5))
    } else {
        return notaPrincipal
    }
}

classificaoAluno(100)
classificaoAluno(38)
*/

/*12) Faça um algoritmo que calcule o fatorial de um número. 

function fatorial(num){
        if(num == 0){
            return 1
        } else {
            return num * fatorial(num - 1)
        }
}
console.log(fatorial(4));
*/

/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 
 function DiasSemana(semana){
     switch(semana){
     case 2:
     case 3: 
     case 4:
     case 5:
     case 6:
        return "É um dia útil da semana"
            break;
     case 7:
     case 1:
        return "Não é um dia util da semana"
            break;
     Case 
     }
 }

//console.log(DiasSemana("Segunda"));
//console.log(DiasSemana("Domingo"));
console.log(DiasSemana(1));
console.log(DiasSemana(3));
console.log(DiasSemana(7));
*/

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. 

function classificacaoAno(ano){
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true // é bissexto se exata
    } else if (ano % 100 == 0) {
        return false // nao bissexto se exata
    } else if (ano % 4 == 0) {
        return true // se divisao exta é bissexto
    } else {
        return false
    }
}

console.log(classificacaoAno(2015));// nao bissexto false
console.log(classificacaoAno(2016));//bissexto true
*/

/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

fruta = "melancia";

switch(fruta){
    case "maçã":
        return console.log("Não vendemos esta fruta aqui");
        break;
    case "kiwi": 
        return console.log("Estamos com escassez de kiwis esta fruta aqui");
        break;
    case "melancia":
        return console.log("Aqui está, são 3 reais o quilo")
        break
    default :
        return console.log("opção invalida tente novamente ")
}
*/