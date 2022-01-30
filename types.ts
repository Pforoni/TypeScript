// boolean (true/false) 
let isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = "Paulo"
message = `Paulo ${isOpen}`

// number (int, decimal, hex, binary)
let total: number
total = 0xff

// array (type[])
let items: string[]
items = ["foo", "bar"]
// ou
let totais: Array<number>
totais = [1, 2, 3]

// tuple
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Color {
    white = '#fff',
    black = '#000'
}

// any (aceita qualquer tipo, mesma coisa de não tipar a variavel) Não é legal!!!
//Possivel configurar no tsconfig.jon que não é permitido esse uso noImplicitAny: true
let coisa: any
coisa = "teste"
coisa = 1

// void(Tipar funcoes que nao retorna nada)
function teste(): void {
    console.log("teste");
}

// null / undefined
//Para quando vc nao sabe o tipo do retorno - Nao aconselhavel
type teste = string | undefined


// never
//Para funcoes que vc sabe que nunca ira retornar nada
//Geralmente para lançar exceptions de erro
function lancaErro(): never {
    throw new Error("Erro");
}

// object
//Tudo que nao seja do tipo primitivo
let cart: object
cart = {
    key: 1
}

// type inference
// A variavel é tipada a partir do primeiro tipo de valor que é atribuido a ela
let message2 = "se torna string"




