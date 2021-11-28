console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y 
}

//function expression 
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y) {
    return x * y 
}
console.log(mult(3, 4))

/*
Ctrl + D: É útil quando a gente precisa renomear partes 
do código que são iguais, de um vez só. Vc seleciona 
a parte do código que quer alterar, e busca por padrões 
idênticos apertando "Ctrl + D" (Windows). 
A cada vez que vc aperta, encontra mais uma parte 
do código com o mesmo padrão (caso exista). 
E então vc altera todas partes ao mesmo tempo. 
E finaliza a edição apertando "Esc".

Alt + ↑ ou ↓: Desloca a linha ou bloco 
selecionado pra cima ou pra baixo.

Ctrl + S: Salva o arquivo atual.

Ctrl + K e depois S: Salva todos os documentos do
projeto. Caso seja digitado Ctrl + K + S (sem soltar 
o Ctrl, será aberta a janela com todos os atalhos
do VS Code).

Ctrl + Alt + N: Executa o código com o Code Runner.

Alt + Shift + F: Formata o código.
*/