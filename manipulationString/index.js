console.log("//=== Manipulation String ===//");

const output = document.getElementById("string-output-paragraph");
const clickResult = document.getElementById("string-button");

const getString = () => {
    const stringFirst = document.getElementById("string-first").value;
    const stringSecond = document.getElementById("string-second").value;

    console.log("stringFirst: ", stringFirst);
    console.log("stringSecond: ", stringSecond);
    
    output.innerText = `First Word: ${stringFirst}
    Second Word: ${stringSecond}`
}

// clickResult.onclick = getString;

clickResult.addEventListener('click', getString);
// clickResult.addEventListener('mouseover', getString);