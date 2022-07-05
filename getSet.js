'use strict';

class Laboratorio{
    #nome;
    #capacidade;
    constructor(nome, capacidade){
        this.#nome = nome;
        this.#capacidade = capacidade;
    }
    getNome(nome){
        return this.#nome;
    }
    getCapacidade(capacidade){
        return this.#capacidade;
    }
    setNome(nome){
        this.#nome = nome;
    }
    setCapacidade(capacidade){
        this.#capacidade = capacidade;
    }
    exibeDados(){
        console.log(`Laboratório de ${this.getNome()}. Capacidade para ${this.getCapacidade()} alunos`);
    }
}

const lab = new Laboratorio('Informática', 45);
lab.setNome('Redes');
lab.setCapacidade(35);
lab.exibeDados()