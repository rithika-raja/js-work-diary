function calculate() {
    const name = document.getElementById('user_name').value.trim();
    const units = parseFloat(document.getElementById('user_unit').value);
    const type = document.getElementById('unit_type').value;

    if (!name || isNaN(units) || units < 0 || type === "") {
        alert("Please fill all fields correctly!");
        return;
    }

    let billAmount = 0;

    // Domestic calculation
    if (type === "1") {
        if (units <= 100) {
            billAmount = 0;
        } else if (units <= 200) {
            billAmount = (units - 100) * 2.25;
        } else if (units <= 400) {
            billAmount = (100 * 2.25) + (units - 200) * 4.50;
        } else if (units <= 500) {
            billAmount = (100 * 2.25) + (200 * 4.50) + (units - 400) * 6;
        } else {
            billAmount = (100 * 2.25) + (200 * 4.50) + (100 * 6) + (units - 500) * 8;
        }
    } 
    
    // Commercial calculation
    else if (type === "2") {
        if (units <= 100) {
            billAmount = units * 5;
        } else if (units <= 300) {
            billAmount = (100 * 5) + (units - 100) * 7;
        } else {
            billAmount = (100 * 5) + (200 * 7) + (units - 300) * 10;
        }
    }
    
    document.getElementById('amount').value= billAmount;

}
