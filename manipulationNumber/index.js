console.log("//=== Number Manipulation ===//");

const output = document.getElementById("number-output");
const addresult = document.getElementById("add-button");
const subresult = document.getElementById("sub-button");
const multiresult = document.getElementById("multi-button");
const divresult = document.getElementById("div-button");

const addNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);
    
    var add = numberFirst + numberSecond;
    
    output.innerText = `Addition is: ${add}`
}

const subNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);
    
    var sub = numberFirst - numberSecond;
    
    output.innerText = `Substraction is: ${sub}`
}

const multiNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);
    
    var sub = numberFirst * numberSecond;
    
    output.innerText = `Multiplication is: ${sub}`
}

const divNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);
    
    var sub = numberFirst / numberSecond;
    
    output.innerText = `Divide is: ${sub}`
}

addresult.addEventListener('click', addNumber);
subresult.addEventListener('click', subNumber);
multiresult.addEventListener('click', multiNumber);
divresult.addEventListener('click', divNumber);