

//função sem retorno
//posso chamar o bloco a partir do nome ja entregando os valores de a e b 
// colocar bons nomes na função

  function karine (a, b) { 
    console.log(a + b)
  }

karine(2, 3) // correto 
karine(2) // not a number 
karine(2, 10, 4, 5) // nessa caso ele vai pegar os 2 primeiros e fod-se o resto 
karine() //not a number 

//função com retorno 
// posso chamar o bloco dentro do console.log entregando os valores de a e b 
function soma (a, b = 0){ 
    return a + b 
}

console.log(soma(2, 3))
console.log(soma(2))// nao passei b ou seja ele é 0 como eu escrevi la em cima b=0
console.log(soma())


/*funcao é um bloco de codigo mas nem sempre, que possui nome mas pode ser anonyma,
 um bloco de codigo nomeado q vc pode chamar em quamquer momento que
  no final retorna um valor ou nao , pode receber dados de entrada ou nao, pode nao 
  receber nao retornar mas ainda assim processar */