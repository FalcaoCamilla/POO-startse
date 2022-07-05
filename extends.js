'use strict';

class Produto{
    #tipo;
    #valor;
    constructor(tipo, valor){
        this.#validaValor(valor);
        this.#tipo = tipo;
        this.#valor = valor;
    }
    #validaValor(valor){
        if (typeof(valor) !== 'number'){
            console.log('Valor inválido!');
        }
    }
    getDados(){
        return `
        Tipo: ${this.#tipo}
        Valor: ${this.#valor}`;
    }
}

class Livro extends Produto{
    #titulo;
    #numPag;
    constructor(titulo, numPag, valor){
        super('Livro', valor);
        this.#titulo = titulo;
        this.#numPag = numPag;
        //console.log(super.getDados());
    }
    exibeDadosLivro(){
        console.log(`${this.getDados()}. ${this.#titulo} - ${this.#numPag}`);
    }
}

const prod = new Produto('Produto genérico', 50)
console.log(prod.getDados()); //Tipo: Produto genérico Valor: 50

const liv = new Livro('Meu Livro', 122, 30)
console.log(liv); //Livro {}
liv.exibeDadosLivro(); //Tipo: Livro Valor: 30. Meu Livro - 122

//atributos privados só podem ser acessados através de metódos públicos que os retornem
