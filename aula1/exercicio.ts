interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

const meuCarro: Carro = {
    marca: "BMW",
    modelo: "Serie 1",
    ano: 2008
}

function exibirCarro(carro: Carro): string {
    return carro.marca + " " + carro.modelo + " (" + carro.ano + ")";
}



type MetodoPagamento = "cartão" | "mbway" | "paypal"

interface Pagamento {
    valor: number;
    metodo: MetodoPagamento;
    detalhes: string;
}

function processarPagamento(pagamento:Pagamento): string {
    return pagamento.metodo + " - " + pagamento.valor;
}

const pagamento1: Pagamento = {
    valor: 150.50,
    metodo: "mbway",
    detalhes: "Compra online"
}


console.log("Carro:", exibirCarro(meuCarro));
console.log("Pagamento:", processarPagamento(pagamento1));