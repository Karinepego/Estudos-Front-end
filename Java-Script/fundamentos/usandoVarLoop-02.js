const funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function() { //push add novo elemento no array
        console.log(i)
    })
}

// O Q saiu pro var é o q ele consegue ver é q i=10
//ele n conseguiu ler o q acoteceu dentro da função 
//pra ele nao importa o q aconteceu so importa q 
//agora var tem valor 10! ele mostra o resul final e
//foda-se os funcs[1,2,3,4...] ele so falou que é 
//10 pra encher linguiça

funcs[2]()
funcs[8]()

/* acontece o q acontece pq var nao suporta escopo de bloco 

como se o var nao possuisse memoria grande como o let, 
ele  apenas imprime o valor final; é como se ele nao conseguisse 
ver q o valor mudou ... como se o valor tivesse mudado na 
velocidade da luz e escapada aos olhos de var 

na real var consegue sim  ver o q acontece entre blocos mas 
nao bloco com funcãp (e é entre blocos com funçao q a magica 
aconteceu, quando os numeros foram se alterando ate 10) um 
bloco com função so pode ser lida dentro do bloco... o q nao 
aconteceu no caso! 

e quando eu cooloco a leitura dentro do bloco 
dá erro! pq ja testei 

EU ACHO O PROF N DISSE ISSO 
*/