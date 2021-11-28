function Pessoa(nome) { 
    //class e função construtora sao bem parecidas,reforça que clçasse é apenas uma forma diferente de se construir uma funcçaõ
    //this.nome = nome

    this.falar = function() { 
    //console.log(`meu nome é ${this.nome}`)// este tbm funciona de boa (ative a linha 3)
    console.log(`meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('João') //intancia do obj
p1.falar()
console.log(p1.nome) // varia de acordo com a abordagem usada linha 3, 6