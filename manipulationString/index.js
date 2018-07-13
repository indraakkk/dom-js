console.log("//=== Manipulation String ===//");

const output = document.getElementById("string-output-paragraph");
const clickResult = document.getElementById("string-button");
const lowResult = document.getElementById("low-button");
const upResult = document.getElementById("up-button");

const getString = () => {
    const stringFirst = document.getElementById("string-first").value;
    const stringSecond = document.getElementById("string-second").value;
    
    output.innerText = `First Word: ${stringFirst}
    Second Word: ${stringSecond}`
}

const caseLow = () => {
    const stringFirst = document.getElementById("string-first").value;
    const stringSecond = document.getElementById("string-second").value;
    
    const lowFirst = stringFirst.toLowerCase();
    const lowSec = stringSecond.toLowerCase();

    output.innerText = `First Word: ${lowFirst}
    Second Word: ${lowSec}`
}

const caseUp = () => {
    const stringFirst = document.getElementById("string-first").value;
    const stringSecond = document.getElementById("string-second").value;
    
    const upFirst = stringFirst.toUpperCase();
    const upSec = stringSecond.toUpperCase();

    output.innerText = `First Word: ${upFirst}
    Second Word: ${upSec}`
}
// clickResult.onclick = getString;

clickResult.addEventListener('click', getString);
lowResult.addEventListener('click', caseLow);
upResult.addEventListener('click', caseUp);
// clickResult.addEventListener('mouseover', getString);