const prod1 = {} //chaves define o object  
prod1.nome = 'Celular voador'//vc entregou ao prod1 uma etiqueta chamada nome 
prod1.preco = 1500.99 //vc entregou ao prod1 uma etiqueta chamada preco
prod1.desconto = 0.40 // vc entregou a prod1 uma etiqueta/att desconto
/*prod1['Desconto legal'] = 0.40 
evite atributos com espaço mas saiba que voce pode fazer isso usando texto [''] e a ele vincular um valor */
console.log(prod1) // resultado { nome: 'Celular voador', preco: 1500.99, 'Desconto legal': 0.4 }



const prod2 = { // prefiro dessa maneira 
    nome: 'Notebook assassino',
    preco: 1500.00,
    //aqui dentro mesmo eu poderia abrir varias e varias cadeiras de objects novos a criar uma estrutura aninhada 
    desconto: 0.10
}
console.log(prod2)


