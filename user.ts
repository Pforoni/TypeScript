// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string; // ? indica que é opcional
}

const accountInfo: AccountInfo = {
    id: 123,
    name: "Paulo",
    //email: "paulo.foroni@gmail.com"
}

type CharInfo = {
    nickname: string;
    level: number;
}

const charInfo: CharInfo = {
    nickname: "pforoni",
    level: 10
}

//INTERSECTION - Diferente do UNION que é OR , o INTERSECTION é AND
type PlayerInfo = AccountInfo & CharInfo
const player: PlayerInfo = {
    id: 1234,
    name: "Paulo A.",
    email: "paulo.foroni@gmail.com",
    nickname: "pforoni2",
    level: 100
}