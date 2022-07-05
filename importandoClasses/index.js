import { CupomDesconto } from "./cupomDesconto";

'use strict';

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