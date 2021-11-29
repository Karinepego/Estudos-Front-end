const a = 1
const b =2
const c= 3

const obj1 = {a:a, b: b, c: c} //sintaxe antiga
const obj2 = { a, b, c} // nova sintaxe
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {} // forma antiga
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} //nova forma
console.log(obj4)

const obj5 = {
    funcao1: function(){ // função antiga
        //...
    },
    funcao2() { // novga função
        //...
    }
}

console.log(obj5)
// mas como pode ver todos eles funcionam