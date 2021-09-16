let num1 = 1
let num2 = 2

num1++//lento
console.log(num1)
--num1 //apressado
console.log(num1)

//é true pq o lento é lento e ate ele ser resolvido o resultado ja foi exibido
console.log(++num1 === num2--)//true
console.log(num1 === num2)//false depois da linha 9 eles nao sao mais iguais