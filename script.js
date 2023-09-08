
const form = document.getElementById('calc');
const inputTemp = document.getElementById('temp');
const selectFrom = document.getElementById('temp_1');
const resultSpan = document.getElementById('result');
const resultSpan1 = document.getElementById('result1');


function calculateTemp() {
    const temperature = parseFloat(inputTemp.value);
    const fromUnit = selectFrom.value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        switch (fromUnit) {
            case 'Cel':
               
                result += `${temperature} &#176;Celsius is ${(temperature * 9/5) + 32} &#176;Fahrenheit<br>`;
                result += `${temperature} &#176;Celsius is ${(temperature + 273.15)} &#176;Kelvin`;
                break;
            case 'Fah':
                result += `${temperature} &#176;Fahrenheit is ${(temperature - 32) * 5/9} &#176;Celsius<br>`;
                result += `${temperature} &#176;Fahrenheit is ${((temperature - 32) * 5/9) + 273.15} &#176;Kelvin`;
                break;
            case 'Kel':
                result += `${temperature} &#176;Celsius is ${(temperature -273.15) } &#176;Celsius<br>`;
                result += `${temperature} &#176;Kelvin is ${((temperature - 273.15) * 9/5) + 32} &#176;Fahrenheit<br>`;
                break;
            default:
                result = 'Invalid unit';
        }
    }

    
    resultSpan.innerHTML = result;
}


form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    calculateTemp();
});
