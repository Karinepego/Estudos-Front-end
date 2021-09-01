function rand([min = 0, max = 1000]) {
    if (min> max)[min,max] =[max,min]
    const valor = Math.floor(valor)
}

console.log(rand([50,40])) // vc n ta nem chamando o array so colocando valor
//no desctructuring 3 vc teve q dar nome ao obj aqui vc n precisou
console.log(rand([992]))// vc passou o min e o outro é 1000
console.log(rand([, 10]))// poaao passar apenas  segundo valor
console.log(rand([])) //posso passar um arrai vazio
console.log(rand()) // e posso passar nada! gera um erro undefined