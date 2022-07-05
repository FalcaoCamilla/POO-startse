'use strict';

class CupomDesconto{
    #desconto1 = 15;
    #desconto2 = 25;
    constructor(){

    }
    getDesconto(gastos){
        if(gastos >= 10000 && gastos <= 30000){
            console.log(`Voce tem direito a ${this.#desconto1}% de desconto`)
        }else if(gastos > 3000){
            console.log(`Voce tem direito a ${this.#desconto2}% de desconto`)
        } else{
            console.log(`Infelizmente, voce não tem descontos no momento`)
        }
    }
}

class Cliente{
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome){
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }
    getBeneficios(){
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }
    setGasto(valor){
        this.#gastosAcumulados += valor;
    }
}

const clientenovo = new Cliente('Milla');
clientenovo.setGasto(2000);
clientenovo.getBeneficios();
clientenovo.setGasto(20000);
clientenovo.getBeneficios();