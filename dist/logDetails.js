"use strict";
// union de tipos, passando os tipos entre pipes
// number | string 
function logDetails(uid, item) {
    console.log(`Id do produto ${uid} e item nome ${item}`);
}
function logInfo(uid, user) {
    console.log(`User id${uid} e nome ${user}`);
}
function logProduto(uid, item) {
    console.log(`Id do produto ${uid} e item nome ${item}`);
}
function getPlatform(plat) {
    return plat;
}
logDetails(12, "Bar");
logDetails("111", "tenis");
logInfo(1, "Paulo");
getPlatform("Windows");
