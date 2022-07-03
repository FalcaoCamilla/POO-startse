class Musica{
    static formato = 'mp3';
    #titulo;
    #duracao;
    constructor(titulo, duracao){
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
    static converteSegundosEmMinutos(duracao){
        const min = Math.floor(duracao / 60);
        let seg = duracao % 60;
        if(seg < 10 && seg > 0){
            seg = `0${duracao % 60}`;
        } else if (seg < 10){
            seg = '00';
        }
        return `${min}:${seg}`;
    }
    getDuracao(){
        return this.#duracao;
    }
    
}

const musica1 = new Musica('Tell me why', 190);
console.log(Musica.converteSegundosEmMinutos(190))
console.log(musica1.getDuracao());