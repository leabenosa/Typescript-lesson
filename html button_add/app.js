"use strict";
const InputNum1 = document.querySelector("#input1");
const InputNum2 = document.querySelector("#input2");
const SubmitButton = document.querySelector('button');
function addNumbers(Num1, Num2) {
    return Num1 + Num2;
}
SubmitButton === null || SubmitButton === void 0 ? void 0 : SubmitButton.addEventListener("click", () => {
    console.log(`The Sum is ${addNumbers(+InputNum1.value, +InputNum2.value)}`);
});
