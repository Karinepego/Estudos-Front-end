function area(largura, altura){
    const area = largura * altura;
    if (area> 20 ){
        console.log (`valor acima d permitido: ${area} m3`)
    } else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5)) 

/*o caso do exemplo da aula usando if e else só 
existe uma condição satisfatória, porque 
25 é maior que 20 e por isso foi executado o
 bloco de código e retornado o console.log 25metros
O else não será executado, pois já entrou no if,
só executa se nenhuma condição anterior for atendida. */