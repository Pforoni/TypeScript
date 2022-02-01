class UserAccount {
    name: string;
    // Modifier protected
    // Apenas acessado/modificado de sua classe ou de classes herdadas
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`Logs do usuario: ${this.name}`);
    }
}

class CharAccount extends UserAccount {
    // Add modifiers para as propriedades
    // Private - Leitura e escrita apenas de dentro da classe
    private nickname: string;
    // Readonly - Só pode ser lido, mesmo de dentro da classe
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        //super indica q estamos pegando da classe pai
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("--------Log GET level-------");
        return this.level;
    }

    set setNickname(nickname: string) {
        this.nickname = nickname;
    }
}

const user = new UserAccount("Paulo", 38);
console.log(user);
console.log(`Nome: ${user.name}`);
user.logDetails();

const pl2 = new CharAccount("Louco", 23, "L2", 30);
pl2.getLevel;
pl2.setNickname = "Boça";
console.log(pl2);