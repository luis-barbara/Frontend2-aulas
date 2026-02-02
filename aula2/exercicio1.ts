// exercicio 1

export interface Player {
    name: string;
    age: number;
    game: string;
}

class GamePlayer {
    player: Player;

    constructor(player: Player) {
        this.player = player;
    }
}

const jogador1: Partial<Player> = {
    name: "Alice",
    game: "Valorant"
};

const jogador2: Readonly<Player> = {
    name: "Bob",
    age: 25,
    game: "League of Legends"
};

const jogador3: Pick<Player, "name" | "game"> = {
    name: "Charlie",
    game: "Minecraft"
};

const jogador4: Omit<Player, "age"> = {
    name: "Diana",
    game: "Fortnite"
};




