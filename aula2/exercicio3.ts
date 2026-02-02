// exercicio 3

class ListHandler<T> {
    valor: T[];
    
    constructor(valor: T[]) {
        this.valor = valor;
    }

    add(item: T): void {
        this.valor.push(item);
    }

    remove(item: T): void {
        this.valor = this.valor.filter(i => i !== item);
    }

    getAll(): T[] {
        return this.valor;
    }
}

const numberList = new ListHandler<number>([1, 2, 3]);
numberList.add(4);
numberList.remove(2);
console.log(numberList.getAll());

