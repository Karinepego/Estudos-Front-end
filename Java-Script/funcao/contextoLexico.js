const valor = "global"

function minhaFuncao(){
    console.log(valor) // retorna global pq a funcçao quando é criada carrega contigo o local e o contexto cujo qual ela foi exposta independentemente do chamado
}


function exec() {
    const  valor = 'local'
    minhaFuncao(valor)
}

exec()