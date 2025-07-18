var InputNum1 = document.querySelector("#input1");
var InputNum2 = document.querySelector("#input2");
var SubmitButton = document.querySelector('button');
function addNumbers(Num1, Num2) {
    return Num1 + Num2;
}
SubmitButton === null || SubmitButton === void 0 ? void 0 : SubmitButton.addEventListener("click", function () {
    console.log("The Sum is ".concat(addNumbers(+InputNum1.value, +InputNum2.value)));
});
