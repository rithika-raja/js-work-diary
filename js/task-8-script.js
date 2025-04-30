function convertcm(){
    const userInput = Number(document.getElementById('inputValue').value);
    console.log(userInput);
    let convInch = userInput/2.54;
    let result1= document.getElementById('result1');
    result1.innerHTML = convInch.toFixed(3)+ ' inches';
}


function convertc(){
    const celcius = Number(document.getElementById('input').value)
    console.log(celcius);
    const fahrenheit= (celcius * 9/5) + 32;
    let result2 =document.getElementById('result2');
    result2.innerHTML = fahrenheit.toFixed(2)+ ' °F';
}

function convertrem(){
    const px = Number(document.getElementById('pxInput').value);
    console.log(px);
    const rem = px / 1.6 ;
    let result3 = document.getElementById('result3').innerHTML = rem.toFixed(2) +' rem';
}