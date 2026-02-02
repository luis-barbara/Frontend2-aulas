// exemplo 1
export interface Post {
    title: string;
    content: string;
    datePublished: Date;
}

class PostContent {
    post: Post;

    constructor(post: Post) {
        this.post = post;
    }
}

const post = new PostContent({
    title: "Post 1",
    content: "Descrição",
    datePublished: new Date()
});

console.log(post);
console.log(post.post.title);




// exemplo 2
class Post2 {
    title: string;
    content: string
    datePublished: Date;
    
    constructor(title: string, content: string, datePublished: Date) {
        this.title = title;
        this.content = content;
        this.datePublished = datePublished;
    }

    gerarData() {
        console.log(Date.now());
    }
}

const post2 = new Post2("Post 2", "Descrição 2", new Date());
console.log(post2.title);
post2.gerarData();



class News extends Post2 {
    gerraData(): void {
        const date = new Date().getFullYear();
        console.log(date);
    }


}


// Generics
function random<T>(valor: T): T {
    return valor;
}


const cenas = random<string>("Teste");
const cenas2 = random<number>(123);
const teste = random<boolean>(true);


// Classe Generics

interface Animal {
    nome: string;
    idade: number;
    cor: string;
}

class Zoo<T> {
    animal: T;

    constructor(animal: T) {
        this.animal = animal;
    }
}

const cao = new Zoo<Animal>({
    nome: "Rex",
    idade: 5,
    cor: "Castanho"
});

cao.animal.nome;




// Utilty Types

type MiniAnimal = Pick<Animal, "nome" | "idade">;
type AnimalSemCor = Omit<Animal, "cor">;




