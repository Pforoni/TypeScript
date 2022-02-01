"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`Logs do usuario: ${this.name}`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        //super indica q estamos pegando da classe pai
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log("--------Log GET level-------");
        return this.level;
    }
    set setNickname(nickname) {
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
