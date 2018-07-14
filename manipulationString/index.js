console.log("//=== Manipulation String ===//");

const output = document.getElementById("string-output-paragraph");
const clickResult = document.getElementById("string-button");
const lowResult = document.getElementById("low-button");
const upResult = document.getElementById("up-button");
const titleResult = document.getElementById("title-button");

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

const caseTitle = () => {
    const stringFirst = document.getElementById("string-first").value.toLowerCase().split(' ');
    const stringFirstEdit = stringFirst.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    
    const stringSecond = document.getElementById("string-second").value.toLowerCase().split(' ');
    const stringSecondEdit = stringSecond.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const allString = [stringFirstEdit, stringSecondEdit].join(' ');
    output.innerHTML = `toTitleCase: ${allString}`

    // const stringSecond = document.getElementById("string-second").value;
    // const allString = `${stringFirst} ${stringSecond}`;

    // const toTitle = allString.toLowerCase().split(',');
    // const toTitle2 = toTitle.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // output.innerHTML = `toTitleCase: ${toTitle2}`
}
// clickResult.onclick = getString;

clickResult.addEventListener('click', getString);
lowResult.addEventListener('click', caseLow);
upResult.addEventListener('click', caseUp);
titleResult.addEventListener('click', caseTitle);
// clickResult.addEventListener('mouseover', getString);