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
 */

function triangulos(L1, L2, L3){
    if ((L1 == L2) && (L2 == L3) && (L3 == L1)) {
        resp = "Equilátero, os 3 lados são iguais";
    }if ((L1 == L2) || (L2 == L3) || (L3 == L1)) {
        resp = "Isóceles, dentre os 3, 2 lados são iguais";
    }else {
        resp = "Escaleno, todos sao diferentes";
    }
return resp
}

console.log(triangulos(4,4,4)) //equi
console.log(triangulos(2,4,4)) //isó
console.log(triangulos(4,6,7)) //esca