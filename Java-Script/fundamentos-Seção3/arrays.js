const valores = [7.7, 8.9, 6.3, 9.2]
    console.log(valores[0], valores[3])    
    console.log(valores[4]) // nao existe   

valores[4] = 10 // agora existe 
//se ele fosse maior [10] tbm funcionaria 
    console.log(valores)    
    console.log(valores.length)
    // length mostra a quantidade total de numeros que tem no array

valores.push({id: 3}, false, null, 'Karine')
// push add novos valores ao array 
    console.log(valores)                 

console.log(valores.pop())//deleta o ultimo valor 'Karine' do array
delete valores[0]//tbm deleta o valor 0 do array
    console.log(valores)                   

    console.log(typeof valores)          