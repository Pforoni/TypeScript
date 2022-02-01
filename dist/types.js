"use strict";
// boolean (true/false) 
let isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = "Paulo";
message = `Paulo ${isOpen}`;
// number (int, decimal, hex, binary)
let total;
total = 0xff;
// array (type[])
let items;
items = ["foo", "bar"];
// ou
let totais;
totais = [1, 2, 3];
// tuple
let title;
title = [1, "foo", "bar"];
// enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
// any (aceita qualquer tipo, mesma coisa de não tipar a variavel) Não é legal!!!
//Possivel configurar no tsconfig.jon que não é permitido esse uso noImplicitAny: true
let coisa;
coisa = "teste";
coisa = 1;
// void(Tipar funcoes que nao retorna nada)
function teste() {
    console.log("teste");
}
// never
//Para funcoes que vc sabe que nunca ira retornar nada
//Geralmente para lançar exceptions de erro
function lancaErro() {
    throw new Error("Erro");
}
// object
//Tudo que nao seja do tipo primitivo
let cart;
cart = {
    key: 1
};
// type inference
// A variavel é tipada a partir do primeiro tipo de valor que é atribuido a ela
let message2 = "se torna string";
message2 = "Nova mensagem";
