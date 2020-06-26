let valor // nao inicializada undefined
console.log(valor)

let valor2 = null       
console.log(valor2)
//console.log(valor.toString()) erro! vc nunca vai conseguir acessar um let com valor nulo

console.log('-----------')

const produto = {}
    console.log(produto.preco)
    console.log(produto)

console.log('-----------')

produto.preco = undefined //evite atribuir undefined deixe a linguagem definir o q é undefinded e o q n é
    console.log ('produto.preco undefined em boolean: >>>',!!produto.preco)
// delete produto.preco
    console.log(produto, 'produto undefined')

console.log('-----------')

produto.preco = null //sem preço esta gratuito 
console.log('produto.preco null em boolean:>>>',!!produto.preco)
console.log(produto, 'produto gratuito')


/*atribuição por referencia 
apontam para o mesmo endereço da mameoria 1
caixote com 2 variaveis apontando para ela,
se aquele dado muda ambos irao sentir a mudança
*/

/*atribuição por valor
a variaval c serve de refrencia/ispiração para variavel d,
mas elas nao possuem o mesmo endereço de memoria,
caso um mude o seu valor isso n afeta a outra 
 */

