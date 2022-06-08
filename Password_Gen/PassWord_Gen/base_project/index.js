const generateBtnEL = document.getElementById("generate-btn");
const symbolsEL = document.getElementById("symbols");
const lowercaseEL = document.getElementById("lowercase");
const numberEL = document.getElementById("number");
const uppercaseEL = document.getElementById("uppercase");
const lenEL = document.getElementById("len");
const copyEL = document.getElementById("copy");
const viewInputEL = document.getElementById("view-input");
const copiedEL = document.getElementById("copied");
console.log(copiedEL);


const symbols = "@#^&*<:;.$~?/|\=+_-(){}[]%";

const lowercases = "qwertyuiopasdfghjklzxcvbnm";

const numbers = "0123456789";

const uppercases = "QWERTYUIOPASDFGHJKLZXCVBNM";

function getSymbols() {
    return symbols[Math.floor(Math.random() *symbols.length)];
    
}
// getSymbols()

function getNumbers() {
    return numbers[Math.floor(Math.random() *numbers.length)];
    
}
// getNumbers()

function getLowercases() {
    return lowercases[Math.floor(Math.random() *lowercases.length)];
    
}
//getLowercases()

function getUppercases() {
    return uppercases[Math.floor(Math.random() *uppercases.length)];
    
}

// getUppercases()

function generatePassword() {
    const len = lenEL.value;
    password = "";
    if (uppercaseEL.checked) {

        password += getUppercases();
        
    }
    
    if (symbolsEL.checked) {

        password += getSymbols();
        
    }
    
    if (lowercaseEL.checked) {

        password += getLowercases();
        
    }
    
    if (numberEL.checked) {

        password += getNumbers();
        
    }
    
    for (let i =  password.length; i < len; i++) {
        
        const X = generateX();

        password += X;
        
    }
    viewInputEL.innerText = password;
}
// generatePassword();

function generateX() {

    const passwordCompiler = [];

    if (uppercaseEL.checked) {

    passwordCompiler.push(getUppercases())
        
    }
    
    if (symbolsEL.checked) {

    passwordCompiler.push(getSymbols())
        
    }
    
    if (lowercaseEL.checked) {

    passwordCompiler.push(getLowercases())
        
    }
    
    if (numberEL.checked) {

    passwordCompiler.push(getNumbers())
        
    }
    
    if (passwordCompiler.length===0) {
        
        return ""
    }

    return passwordCompiler[Math.floor(Math.random() *passwordCompiler.length)];
}

generateBtnEL.addEventListener("click",generatePassword)

copyEL.addEventListener("click", () => { 
    const textarea = document.createElement("textarea");
    password = viewInputEL.innerText
    if (!password) {
        return;
        
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    copiedEL.classList.remove("hide")
    setTimeout(() => {
            copiedEL.classList.add("hide")

    }, 1000);
    
    
    
});