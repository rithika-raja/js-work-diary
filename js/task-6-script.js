function findVowels() {
    let text = document.getElementById('textInput').value.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let foundVowels = [];

    for (let char of text) {
        if (vowels.includes(char) && !foundVowels.includes(char)) {
            foundVowels.push(char);
        }
    }

    if (foundVowels.length > 0) {
        document.getElementById('result').innerText = "Vowels found: " + foundVowels.join(', ');
    } else {
        document.getElementById('result').innerText = "No vowels found.";
    }
}