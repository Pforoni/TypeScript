"use strict";
const tlou = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, Metro`);
    }
};
const leftBehind = {
    title: "The Last of Us - Left Behind",
    description: "The second best game in the world",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new chac"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: FIFA, UFC`);
    }
};
class CreateGame {
    constructor(t, d, g, p) {
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }
    getSimilars(title) {
        console.log("teste2");
    }
}
tlou.getSimilars("COD");
tlou.getSimilars(tlou.title);
const testeUnionInterface = {
    a: "bla",
    b: "foo"
};
// vantagem: quando estiver criando libs, prefira interfaces!
// porque sao mais extensiveis
//Video de referencia: types vs interface
//https://youtu.be/PMhd1ebCGl8?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_
