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
/* Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
 
function escolherAutomovel(automovel){
    switch(automovel){
        case "hatch":
            return console.log('Compra efetuada com sucesso');
            break;
        case "sedans": 
        case "motocicletas":
        case "caminhonetes":
            return console.log("Tem certeza que não prefere este modelo?: hatch");
            break;
        default :
            return console.log("Não trabalhamos com este tipo de automóvel aqui")
    }S
}

escolherAutomovel("hatch"); 
escolherAutomovel("sedans"); 
escolherAutomovel("motocicletas"); 
escolherAutomovel("caminhonetes"); 
escolherAutomovel("qualquer um"); 
*/

/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.  

function calculadora(valor1, operador, valor2){
    switch(operador){
        case "+":
            return console.log(`${valor1} + ${valor2} = ${valor1 + valor2}` );
            break;
        case "-": 
            return console.log(`${valor1} - ${valor2} = ${valor1 - valor2}` );
            break;
        case "*":
            return console.log(`${valor1} * ${valor2} = ${valor1 * valor2}` );
            break;
        case "/":
            return console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
            break
        default :
            return console.log("operções inválidas")
    }
}

calculadora(2,"+",2); 
calculadora(2,"-",2); 
calculadora(2,"*",2); 
calculadora(2,"/",2); 
calculadora(2,"ç",2);
*/

/*17) Um funcionário irá receber um aumento de acordo com o seu plano detrabalho, de acordo com a tabela abaixo: 
Plano| Aumento
A    |   10%
B    |   15%
C    |   20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 

function mudaPlano(plano, saAtual){
    switch(plano){
        case "A":
            return console.log(`plano A = Salario atual: ${saAtual}; Novo salario: ${(saAtual/10)+saAtual}` );
            break;
        case "B": 
            return console.log(`Plano B = Salario atual: ${saAtual}; Novo salario: ${saAtual * 1.15}` );
            break;
        case "C":
            return console.log(`Salario atual: ${saAtual}; Novo salario: ${saAtual * 1.2}` );
            break
        default :
            return console.log("operções inválidas")
    }
}

mudaPlano("A", 1000); 
mudaPlano("B", 1000); 
mudaPlano("C", 1000); 
mudaPlano("d", 1000); */

/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ 
function numeroPorExtenso(numero) {
    switch (numero) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Numero fora do intervalo.')
    }
}

numeroPorExtenso(0)
numeroPorExtenso(1)
numeroPorExtenso(2)
numeroPorExtenso(3)
numeroPorExtenso(4)
numeroPorExtenso(5)
numeroPorExtenso(6)
numeroPorExtenso(7)
numeroPorExtenso(8)
numeroPorExtenso(9)
numeroPorExtenso(10)
numeroPorExtenso(11) */

/*19) O cardápio de uma lanchonete é o seguinte:
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 
function lanchonete(cod, quan){
    switch (cod) {
        case 100:
            return console.log("cao quente, " +quan+ " unidades = " + 3.00*quan)
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }

}

lanchonete(100,1);
lanchonete(200, 2);
lanchonete(300, 2);
lanchonete(400, 2);
lanchonete(500, 2);
lanchonete(600, 2);
lanchonete(700, 2);
*/

/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

let count = 0;
 while (count <= 11 ) {
	console.log(count + " Hello world")

	count++;
} 
*/

/*25) Escrever um programa para exibir os números de 1 até 50 na tela 
let count = 1;
 while (count <= 50 ) {
	console.log(count )
	count++;
} 

function contador () {
    for (let i = 1; i<=50; i++) {
        console.log(i);
    }
}
contador();
*/

/*26) Fazer um programa para encontrar todos os pares entre 1 e 100. 

function contador () {
    for (let i = 1; i<=50; i++) {
        if(i % 2 == 0){
            console.log(i + " é par!")
        }
    }
}
contador();
*/

/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas):
 1 nota(s) de R$ 10. 
 1 nota(s) de R$ 5. 
 3 nota(s) de R$ 1. 

function dinheiroContado(valor){
 cont = valor - 10;
 seila = cont - 5;

}

dinheiroContado(18)*/

/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function quantidadePares(vetor){
let impares = 0;
let pares = 0;
    for(let i = 0; i < vetor.length; i++ ){
        if (vetor[i] %2 == 0){
            pares ++; 
        }else{
            impares ++;
            
        }
    }
    console.log(`Existem ${pares} números pares e ${impares} números ímpares.`)
}

vetor = [1,2,3,4,5,6,7,8,9,10];
quantidadePares(vetor)*/

/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
4) conveniados acima de 60 anos pagam R$130 

function PlanoSaude(idade){
        if(idade <= 10){
            return console.log(`Voce ira pagar 100$ convenio e 80% por mês`);
        }else if((idade > 10) & (idade < 30)){
            return console.log(`Voce ira pagar 100$ convenio e 50% por mês`);
        }else if( idade >= 30 & idade < 60){
            return console.log(`Voce ira pagar 100$ convenio e 95% por mês`);
        }else{
            return console.log(`Voce ira pagar 100$ convenio e 130% por mês`);  
        }
}
PlanoSaude(9)
PlanoSaude(11)
PlanoSaude(31)
PlanoSaude(61)*/

/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. 

function quantidadePares(vetor){
    let dentre = 0;
    let outros = 0;
        for(let i = 0; i < vetor.length; i++ ){
            if (vetor[i] >= 10 & (vetor[i] <= 20)){
                dentre ++; 
            }else{
                outros ++;
            }
        }
        console.log(`Existem ${dentre} números dentre 10 e 20 e ${outros} números fora desse intervalro.`)
    }
    
    vetor = [10,15,16,17,18,19,20,25,26];
    quantidadePares(vetor)*/

/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. 

function quantidadePares(vetor){
let cont = 0;  
let maior = 0;
let menor = 1;
        for(let i = 0; i < vetor.length; i++ ){
            cont = i
            if (vetor[i] > cont){
                maior = vetor[i]; 
            }else{
                menor = vetor[i];
            }
        }
        console.log(`maior: ${maior} \nmenor: ${menor}`)
    }
    
    vetor = [1,2,3,4,5,6,7,8,9,10];
    quantidadePares(vetor)
*/

/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 
function ContaNegativos(vetor){
let negativos = 0;  

    for(let i = 0; i < vetor.length; i++ ){
    cont = i
        if (vetor[i] < 0){
            negativos ++;
        }
    }
    console.log(`exiatem no veto: ${negativos} numeros negativos`)
}
        
vetor = [-1,-2,-3,-4,-5,-6,-7,0,1,2,3,4,5];
ContaNegativos(vetor)*/

/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros 

function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }
    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]
console.log(mediaVetor(vetor))
*/

/* */


/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 *

function união1 (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }
    return soma/vetor.length
}

vetorInteiro = [1, 2, 3, 4]
console.log(vetorInteiro(vetor))

vetorString = ["a", "b", "c", "d"]
console.log(mediaVetor(vetor))

vetorDouble = [1.5, 2.5, 3.5, 4.5]
console.log(mediaVetor(vetor))

vetorResultado = vetorInteiro.concat(vetorString, vetorDouble)
console.log(mediaVetor(vetor))
