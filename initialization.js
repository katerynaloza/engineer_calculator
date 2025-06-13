let currentInput = "";            //ініціалізація
let previousInput = "";
let operation = null;
let result = 0;

const operations = ["+", "-", "*", "/", "Mod", "x²", "x³", "ʸ√x", "xʸ"];
const singleOperations = ["1/x", "log10", "ln", "√", "sin", "cos", "tan", "n!", "%", "Rnd", "π", "e", "³√", "bin", "oct", "hex"];

const display1 = document.getElementById("display1");

const buttons = document.querySelectorAll("button");


let memoryValue = 0;


function updateDisplay() {       // оновлення дисплею
    if (operation === null) {
        display1.innerText = currentInput;
    } else {
        display1.innerText = previousInput + " " + operation + " " + currentInput;
    }
}

function setResult(value) {
    currentInput = value; 
    previousInput = "";
    operation = null;
    updateDisplay();
}