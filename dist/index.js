"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("button"); //corrije o erro do compilador achar q o objeto é null;
const button2 = document.getElementById("button2"); //corrije o erro do compilador achar q o objeto é null;
function sum(a, b) {
    return a + b;
}
let sub = (x, y) => {
    return x - y;
};
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
    console.log("Paulo Augusto N.");
});
button2.addEventListener("click", function () {
    console.log(sub(Number(input1.value), Number(input2.value)));
});
