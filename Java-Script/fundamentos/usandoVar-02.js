var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//como vc pode ver esta havendo cnoflito de 2 var iguais
//isso ocorro pq var so tem escopo como global e função, blocos{} , sao ignorados 
//fuja o escopo global! ele vai te matar 