// union de tipos, passando os tipos entre pipes
// number | string 
function logDetails(uid: number | string, item: string) {
    console.log(`Id do produto ${uid} e item nome ${item}`);
}

function logInfo(uid: number | string, user: string) {
    console.log(`User id${uid} e nome ${user}`);
}

// type alias 
//Pode criar uma variavel para esse tipo union - utilizando type
type Uid = number | string

function logProduto(uid: Uid, item: string) {
    console.log(`Id do produto ${uid} e item nome ${item}`);
}

//type alias
type Platform = "Windows" | "Linux" | "MacOs"

function getPlatform(plat: Platform){
    return plat;
}



logDetails(12, "Bar");
logDetails("111", "tenis");

logInfo(1, "Paulo");

getPlatform("Windows");