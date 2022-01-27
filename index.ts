const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")! //corrije o erro do compilador achar q o objeto é null;
const button2 = document.getElementById("button2")! //corrije o erro do compilador achar q o objeto é null;

function sum(a: number, b: number) {
    return a + b;
}

let sub = (x: number, y: number): number => {
    return x - y;
}

button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
    console.log("Paulo Augusto N.");
});

button2.addEventListener("click", function () {
    console.log(sub(Number(input1.value), Number(input2.value)));
});