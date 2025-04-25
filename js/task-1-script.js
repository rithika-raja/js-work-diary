function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let answer;

    if (operator === '+') {
        answer = num1 + num2;
    } else if (operator === '-') {
        answer = num1 - num2;
    } else if (operator === '*') {
        answer = num1 * num2;
    } else if (operator === '/') {
        if (num2 == 0) {
            alert("A Number cannot be divisible by 0");
            return;
        } else {
            answer = num1 / num2;
        }
    }
    document.getElementById("answer").value = answer;
}
