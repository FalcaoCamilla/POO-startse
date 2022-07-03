'use strict';

class Produto{
    static grande = 20; //propriedade chamada pela classe, nunca pelo objeto
    static medio = 10;
    static pequeno = 5;
    descricao;
    largura;
    altura;
    profundidade;
    porte;
    valor;
    constructor(descricao, largura, altura, profundidade, porte, valor){
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.porte = porte;
        this.valor = valor;
    }
    volumeProduto(){
        return `O volume total de ${this.descricao} é ` + this.largura * this.profundidade * this.altura;
    }
    parcelaValor(parcelas){
        return `O valor das parcelas será de ` + this.valor / parcelas;
    }
}

const produto1 = new Produto('Nexarmadilha', 10, 12, 15, Produto.medio, 30);

console.log(produto1.volumeProduto())
console.log(produto1.parcelaValor(3))


