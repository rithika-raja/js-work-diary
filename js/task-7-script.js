function checkCharacter() {
    let char = document.getElementById('charInput').value;
    let result = document.getElementById('result');

    if (char.length === 0) {
        result.innerText = "Please enter a character.";
        return;
    }

    if (/[a-zA-Z]/.test(char)) {
        result.innerText = "It is a LETTER (A-Z or a-z).";
    } else if (/[0-9]/.test(char)) {
        result.innerText = "It is a NUMBER (0-9).";
    } else {
        result.innerText = "It is a SPECIAL CHARACTER.";
    }
}