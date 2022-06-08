class Calculator {

    constructor(dataResultArea, dataInputArea) {
    this.dataInputArea = dataInputArea;

    this.dataResultArea = dataResultArea;

    this.clear()

    }
//IDEA: //? responsible for clearing values and operations on the screen
    clear() {


        this.dataResultArea.innerText  = "" 
        
        this.dataInputAreaValue = "";
        
       this.operation = undefined;

    }
    
    delete() {

  this.dataInputAreaValue = this.dataInputAreaValue.toString().slice(0,-1) 

        
    }

//IDEA: //? responsible for displaying numbers on the screen

    appendNumber(number) {
if (number ==='.' && this.dataInputAreaValue.includes('.')) return 
    

        this.dataInputAreaValue = this.dataInputAreaValue.toString() + number.toString() 
    }

    chooseOperator(operator) {
        if (this.dataInputAreaValue === "") return
        
        if (this.dataResultAreaValue !== "") {
            this.compute()
        }
        this.operation = operator

        this.dataResultAreaValue = this.dataInputAreaValue

        // console.log(this.dataInputAreaValue);

        this.dataInputAreaValue =""

    }

    compute() {

        let computation;

        const resultArea = parseFloat(this.dataResultAreaValue);
        
        const inputArea = parseFloat(this.dataInputAreaValue);

        if(isNaN(resultArea) || isNaN(inputArea) ) return

        switch (this.operation) {
            
            case '+':
             computation = resultArea + inputArea
                
                break;
        
            case '-':
             computation = resultArea - inputArea
                
                break;
        
            case '*':
             computation = resultArea * inputArea
                
                break;
        
            case '/':
             computation = resultArea / inputArea
                
                break;
        
            default:
                return;
        }

        this.dataResultAreaValue = ''
        
        this.dataInputAreaValue = computation

        this.operation = undefined;

        
    }

    //IDEA: //? As the name implies it's  responsible for updating values, operations and results on the screen


    getDisplayNumber(number) {
        
        const stringNumber = number.toString();

        const integerDigits = parseFloat(stringNumber.split('.')[0]);

        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;

        if (isNaN(integerDigits)) {
            
            integerDisplay =''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits : 0 });
        }

        if (decimalDigits != null) {

return `${integerDisplay}.${decimalDigits}`
            
        } else {
            
            return integerDisplay
        }
        
    }

    updateDisplay() {

        this.dataInputArea.innerText = this.getDisplayNumber(this.dataInputAreaValue);

        if (this.operation != null) {
            
            this.dataResultArea.innerText = `${this.getDisplayNumber(this.dataResultAreaValue)} ${this.operation}`
        }


    }

};




//IDEA:___//

//CHANGED:___


//BUG:___

//FIXME:__



const numberButtons = document.querySelectorAll('[data-number]');

const operatorButtons = document.querySelectorAll('[data-operator]');

const equalsButton = document.querySelector('[data-equals]');

const clearButton = document.querySelector('[data-clear-all]');

const deleteButton = document.querySelector('[data-delete]');

const dataResultArea = document.querySelector('[data-result-area]');

const dataInputArea = document.querySelector('[data-input-area]');


const calculator = new Calculator(dataResultArea, dataInputArea);

numberButtons.forEach((num) => { 
console.log(num);
    num.addEventListener("click", () => { 

        calculator.appendNumber(num.innerText);
        calculator.updateDisplay();
    });
});

operatorButtons.forEach((operation) => { 
console.log(operation);
    operation.addEventListener("click", () => { 

        calculator.chooseOperator(operation.innerText);
        calculator.updateDisplay();
    });
});


equalsButton.addEventListener("click", () => { 

        calculator.compute();
        calculator.updateDisplay();
});
    
clearButton.addEventListener("click", () => { 

        calculator.clear();
        calculator.updateDisplay();
});

    
deleteButton.addEventListener("click", () => { 

        calculator.delete();
        calculator.updateDisplay();
    });