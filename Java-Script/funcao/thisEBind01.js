const pessoa = {
    saudacao: 'buenos dias!',
    falar(){
        console.log(this.saudacoes)
    }
}

pessoa.falar()
const falar = pessoas.falar
falar() // conflito entre paradigmas: functional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()