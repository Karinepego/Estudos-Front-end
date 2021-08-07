const funcs = [];

for(let i = 0; i < 10; i++) {
    funcs.push(function() { //push add novo elemento no array
        console.log(i);
    });
};

funcs[2]();
funcs[8]();

// oq saiu do let é toda a carreira de valores 2345etc... 
//pq ele consegue ler blocos ele conseguiu ver o q aconteceu 
//ele mostra o q aconteceu(passo a passo) nao apenas o resul final igual var 
 
/* let= como ele suporta bloco,ele consegue ter essa memoria
do que aconteceu entre os blocos .. isso nao ficou blind aos
olhos de let como ficou aos olhos de var que nao suporta blocos

EU ACHO
*/