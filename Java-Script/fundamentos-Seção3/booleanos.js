let isAtivo = false
console.log(isAtivo)
//console.log(!!isAtivo + " esse aqui") 
console.log(typeof false)

    /*aula do Bruno ...
            !=negação  ~=negação
            console.log(!!isAtivo) 
            {!(!F)} :
            (!F)=V
            !V = F
            X=F por isso resulado é falso
    */

isAtivo = true
console.log(isAtivo)
//console.log(!!!isAtivo + " esse")
console.log(typeof true)

    /*aula do Bruno ...
         console.log(!!!isAtivo)
        {![!(!v)]} :
        (!v)=f
        [!f]=v
        {!v}=f
        X=F por isso resultado é falso
*/


isAtivo = 1
console.log(!!isAtivo) 

console.log('Os verdadeiros...')
//daqui pra baixo eu n intendi nada
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos... ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log ('Pra finalizar...')
console.log(!!(''|| null || 0 || ' '))

let nome = 'Karine'

console.log(nome || 'Desconhecido')