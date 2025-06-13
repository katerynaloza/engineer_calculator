buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.textContent;
        console.log(`"${value}"`);
        
        if (value === "C") {              // кнопка С - очищає все
            clearAll();
        } else if (value === "Del") {     //кнопка Del - прибирає тільки одну цифру(елемент)
            deleteLastElement();
        } else if (value === "M+") {      // кнопка М+ - зберігає в память
            memoryAdd();
        } else if (value === "MR") {     //кнопка MR - виводить збережене з памяті
            memoryCall();
        } else if (value === "=") {        // кнопка = показує результат обчислення двох чисел
            calculateResult();
        } else if (operations.includes(value)) { // ввели першу цифру - вона зберіглась, обрали операцію і чекаємо друге число
            handleOperation(value);
        } else if (singleOperations.includes(value)) {   // результат обчислення операцій з одним числом
            calculateSingleOperations(value);
        } else {
            currentInput += value;
            updateDisplay();
        }
        
    })
        
})

//функції для AddEventListener

function clearAll() {
    currentInput = "";
    previousInput = "";
    operation = null;
    display1.innerText = "0";
}

function deleteLastElement() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function memoryAdd() {
    memoryValue += Number(currentInput);
    currentInput = "";
}

function memoryCall() {
    currentInput = memoryValue;
    updateDisplay();
}

function calculateResult() {
    if (previousInput !== "" && currentInput !== "" && operation !== null) {
                const prev = Number(previousInput);
                const current = Number(currentInput);
                switch(operation) {
                    case "+":
                        result = prev + current;
                        break;
                    case "-":
                        result = prev - current;
                        break;
                    case "*":
                        result = prev * current;
                        break;
                    case "/":
                        result = prev / current;
                        break;
                    case "Mod":
                        result = prev % current;
                        break;
                    case "x²":
                        result = Math.pow(current, 2);
                        break;
                    case "x³":
                    result = Math.pow(current, 3);
                        break;
                    case "ʸ√x":
                        result = Math.pow(current, 1 / prev);
                        break;
                    case "xʸ":
                        result = Math.pow(prev, current);
                        break;
                    
                    }
                setResult(result);
}}

function handleOperation(value) {
    previousInput = currentInput;
    operation = value;
    currentInput = "";
    updateDisplay();
}

function calculateSingleOperations(value) {
    const current = Number(currentInput);
            switch(value) {
                case "1/x":
                    if (current === 0) {
                        result = "Error";
                    } else {
                    result = 1 / current;
                    }
                    break;
                case "log10":
                    result = Math.log10(current)
                    break;
                case "ln":
                    result = Math.log(current);
                    break;
                case "√":
                    result = Math.sqrt(current);
                    break;
                case "sin":
                    result = Math.sin(current);
                    break;
                case "cos":
                    result = Math.cos(current);
                    break;
                case "tan":
                    result = Math.tan(current);
                    break;
                case "n!":
                    result = factorial(current);
                    break;
                case "%":
                    result = current / 100;
                    break;
                case "Rnd":
                    result = Math.round(current);
                    break;
                case "π":
                    result = Math.PI;
                    break;
                case "e":
                    result = Math.E;
                    break;
                case "³√":
                    result = Math.cbrt(current);
                    break;
                case "bin":
                    result = Number(currentInput).toString(2);
                    break;
                case "oct":
                    result = Number(currentInput).toString(8);
                    break;
                case "hex":
                    result = Number(currentInput).toString(16).toUpperCase();
                    break;

            }
            setResult(result);
}





