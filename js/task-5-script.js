function checkPrime() {
    let num = parseInt(document.getElementById('numberInput').value);
    let result = document.getElementById('result');

    if (isNaN(num)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    if (num <= 1) {
        result.innerText = num + " is NOT a prime number.";
        return;
    }

    // Assume it's prime
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.innerText = num + " is a PRIME number!";
    } else {
        result.innerText = num + " is NOT a prime number.";
    }
}