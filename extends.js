'use strict';

class Produto{
    tipo;
    constructor(tipo){
        this.tipo = tipo;
    }
    getDados(){
        return `
        Tipo: ${this.tipo}`;
    }
}

class Livro extends Produto{
    titulo;
    numPag;
    constructor(titulo, numPag){
        super('Livro');
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(super.getDados());
    }
    exibeDadosLivro(){
        console.log(`${this.getDados()}. ${this.titulo} - ${this.numPag}`);
    }
}

//const prod = new Produto('Produto genérico')
//console.log(prod.getDados());

const liv = new Livro('Meu Livro', 122)
//console.log(liv);
liv.exibeDadosLivro();
