// exercicio 2

class Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    portas: number;

    constructor(marca: string, modelo: string, ano: number, portas: number) {
        super(marca, modelo, ano);
        this.portas = portas;
    }
}

const meuCarroCarro = new Carro("BMW", "Serie 1", 2008, 4);
console.log(meuCarroCarro);
