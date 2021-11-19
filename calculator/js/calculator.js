const instantOperation = ["%", "n!", "1/x", "√", "x<sup>2</sup>"]
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = '';
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (number === '±') {
            this.currentOperand = 0 - this.currentOperand;
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '' && this.previousOperand === '') return;
        if (this.previousOperand != '' && this.operation != operation && this.currentOperand == '') {
            this.currentOperand = this.previousOperand;
            this.previousOperand = '';
            this.operation = operation;
            this.compute();
        } else if (this.previousOperand != '') {
            if (this.operation == operation) return
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    chooseInstantOperation(operation) {
        if (this.currentOperand === '' && this.previousOperand === '') return;
        // if (this.previousOperand != "")
        this.instantCompute(operation);
    }

    instantCompute(operation) {
        let computation;
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        switch (operation) {
            case '%':
                computation = current / 100;
                break;
            case 'n!':
                let factorial = (n) => {
                    if (n < 0 || !Number.isInteger(n)) {
                        return false;
                    }
                    if (n <= 1) {
                        return 1;
                    } else {
                        return factorial(n - 1) * n;
                    }
                }
                computation = factorial(current);
                break;
            case '1/x':
                computation = 1 / current;
                break;
            case '√':
                computation = Math.sqrt(current);
                break;
            case 'x<sup>2</sup>':
                computation = Math.pow(current, 2);
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        if (this.operation == undefined) {
            this.previousOperand = computation;
        }
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case `÷`:
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.value = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.value =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.value = ''
        }
    }
}


let numberButtons = document.querySelectorAll('.numberic')
let operationButtons = document.querySelectorAll('.operator.normal')
let equalsButton = document.querySelector('.result')
let deleteButton = document.querySelector('.delete')
let allClearButton = document.querySelector('.all-clear')
let previousOperandTextElement = document.querySelector('#equation')
let currentOperandTextElement = document.querySelector('#input')
let instantButtons = document.querySelectorAll('.operator.instant')
let condition = 0;

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (condition == 1){
            calculator.delete();
            condition = 0;
            calculator.appendNumber(button.innerText);
        } else calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
        condition = 1;
    })
})

instantButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseInstantOperation(button.innerHTML)
        calculator.updateDisplay();
        // if (calculator.operation == undefined) {
        //     calculator.currentOperand = ''
        // }
        condition = 1;
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
    // calculator.currentOperand = "";
    // calculator.previousOperand = "";
    // calculator.operation = "";
    condition = 1;
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.currentOperand = 0
    calculator.updateDisplay()
    condition = 0
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.currentOperand = 0
    calculator.updateDisplay()
    condition = 0
})
