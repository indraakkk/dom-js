console.log("//=== Number Manipulation ===//");

//=================global variable=================================

const output = document.getElementById("number-output");
const addresult = document.getElementById("add-button");
const subresult = document.getElementById("sub-button");
const multiresult = document.getElementById("multi-button");
const divresult = document.getElementById("div-button");
const compareresult = document.getElementById("compare-button");
const genrandom = document.getElementById("random-button"); 

//=================function add=================================

const addNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);

    var add = numberFirst + numberSecond;

    output.innerText = `Addition is: ${add}`
}

//=================function substraction=================================

const subNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);

    var sub = numberFirst - numberSecond;

    output.innerText = `Substraction is: ${sub}`
}

//=================function multiplication=================================

const multiNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);

    var sub = numberFirst * numberSecond;

    output.innerText = `Multiplication is: ${sub}`
}

//=================function divide=================================

const divNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);

    var sub = numberFirst / numberSecond;

    output.innerText = `Divide is: ${sub}`
}

//=================function compare number==========================

const compareNumber = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);

    if (numberFirst > numberSecond) {
        output.innerText = `The Comparison is: ${numberFirst} greater than ${numberSecond}`
    } else if (numberFirst < numberSecond) {
        output.innerText = `The Comparison is: ${numberFirst} less than ${numberSecond}`
    } else {
        output.innerText = `The Comparison is: same number`
    }
}

// using ternary

const compareNumber2 = () => {
    const numberFirst = parseInt(document.getElementById("number-first").value);
    const numberSecond = parseInt(document.getElementById("number-second").value);

    numberFirst > numberSecond ? output.innerText = `The Comparison is: ${numberFirst} greater than ${numberSecond}`
        : numberFirst < numberSecond ? output.innerText = `The Comparison is: ${numberFirst} less than ${numberSecond}`
        : numberFirst == numberSecond ? output.innerText = `The Comparison is: same number`
        : output.innerText = `The Comparison is: not a number`

}

//=================Generate Random Number between 0-19=======================
const genRandom = () => {
    const rand = Math.floor(Math.random() * 20);
    output.innerText = `The Random Number is: ${rand}`
}

//=================Print result on html page=================================

addresult.addEventListener('click', addNumber);
subresult.addEventListener('click', subNumber);
multiresult.addEventListener('click', multiNumber);
divresult.addEventListener('click', divNumber);
compareresult.addEventListener('click', compareNumber2);
genrandom.addEventListener('click', genRandom);