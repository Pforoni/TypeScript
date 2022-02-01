// exclusivo no typescript
// modifiers funcionam da mesma forma que nas classes
interface IGame {
    title: string;
    description: string;
    genre: string;
    platform?: string[]; //?- Propriedade como opcional
    getSimilars: (title: string) => void; //?- Pode ser usado no metodo tbm.
}

const tlou: IGame = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, Metro`);
    }
}

//Extendendo a Interface - utilize extends
interface IDLC extends IGame {
    originalGame: IGame;
    newContent: string[];
}

const leftBehind: IDLC = {
    title: "The Last of Us - Left Behind",
    description: "The second best game in the world",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new chac"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: FIFA, UFC`);
    }
}

class CreateGame implements IGame {
    title: string;
    description: string;
    genre: string;
    platform?: string[]; //?- Propriedade como opcional

    constructor(t: string, d: string, g: string, p: string[]) {
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }

    getSimilars(title: string) {
        console.log("teste2");
    }

}

tlou.getSimilars("COD");
tlou.getSimilars(tlou.title);

