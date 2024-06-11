class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar();  // Output: O guerreiro atacou usando espada

const heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar();  // Output: O mago atacou usando magia

const heroi3 = new Heroi("Shifu", 60, "monge");
heroi3.atacar();  // Output: O monge atacou usando artes marciais

const heroi4 = new Heroi("Naruto", 20, "ninja");
heroi4.atacar();  // Output: O ninja atacou usando shuriken