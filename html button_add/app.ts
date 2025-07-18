const InputNum1 = document.querySelector("#input1") as HTMLInputElement;
const InputNum2 = document.querySelector("#input2") as HTMLInputElement;

const SubmitButton = document.querySelector('button');

function addNumbers(Num1 : number, Num2 : number) {
    return Num1 + Num2;
}

SubmitButton?.addEventListener("click", ()=> {
    console.log(`The Sum is ${addNumbers( +InputNum1.value , +InputNum2.value )}`);
}) 
