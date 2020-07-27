const [a] = [10] //funciona so com um valor como pode ver 
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
//n5 é undefined pq n1 n2 n3 n4 roubam os valores existentes n6=0
//e n5 fica undefined *n2 e n4 n existe mas tem o espaço ali onde 
//eles deveriam ficar ne .... entao eles meio q existem no array

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
//ignorou tudo mas ... nota ali vai cair no 6 
// essa aula n ficou muito clara pra mim
