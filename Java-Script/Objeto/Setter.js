const sequencia = {
    _valor:  1, // convenção (mostra ao dev q da pra ser acessada apenas internamente dentro do obj)
    get valor() {return this._valor++}, //função get
    set valor(valor) {// função set
        if(valor > this._valor) {//processamento o valor sempre ira pra frnte acimda do q ele foi
            this._valor = valor
        }
    }//apenas aqui ele suporta a sobrecarga de metodos apenas
}

console.log(sequencia.valor, sequencia.valor)//1 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)//1000 1001
sequencia.valor = 900 // ignorada pois este "pseudo valor" foi menor q o  _valor q é privado
console.log(sequencia.valor, sequencia.valor) //1002 1003


