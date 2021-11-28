class Pessoa { //class
    Construtor(nome){
        this.nome = nome
    }

    falar(){ //function 
    console.log(`meu nome é ${this.nome}`) // sem o this estaria errado 
    }
}

const p1 = new Pessoa('João') //intancia do obj
p1.falar()

const criarPessoa = nome => { //funçao arrow
    return {
        falar: () => console.log(`meu nome é ${this.nome}`)//não preciso acesso nome usando this pq esse obj tem 
        //ciencia do contexto lexico onde ele foi declarado, ele consegue ter acessoa variavel do metodo no qual esse obj foi criado  
    }
}

const p2 = criarPessoa('Joao')
p1.falar()