function pessoa(){
    this.idade = 0

    
    /* setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this) ,1000) */

    const self = this //uma forma de burlar a confusao que this causa quanto ao local em q ele se refere 
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this) */,1000) //a cada segundo idade é acrescentado +1


    // pra parar de rodar ctrl+alt+N ou M 
    // ou entao botao esquerdo no terminal e stop code run
}

new pessoa