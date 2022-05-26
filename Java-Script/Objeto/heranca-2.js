//cadeia de protootipos (prototipe chain)
Object.prototype.attr0 = '0' // evitar fazer pois isso mexe com toda a hierarquia do codigo
const avo = {attr1: 'A'}
const pai = {__proto__: avo ,attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filçho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual = delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return`${thus.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo:'v40',
    status(){
        return `${this.modelo}: ${super.status()}`/*super referencia o prototipo, se vc usar this no lugar do super poderia 
        ococrrer uma recursao onde, super chamaria a si mesmo */
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
