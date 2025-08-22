// Write a temperature converter application that converts temperature 
// between Celsius, kelvin and Fahrenheit.


function convertCelsiusToKelvin(temp) {
    let newTemp = temp + 273.15

    console.log('This is the new converted celsius temperature to Kelvin : ', newTemp);
}


function convertCelsiusToFahrenheit(temp) {
    let newTemp = (temp * 9/5) + 32

    console.log('This is the new converted celsius temperature to Fahrenheit : ', newTemp);
}

function convertKelvinToCelsius(temp) {
    let newTemp = temp - 273.15

    console.log('This is the new converted kelvin temperature to Celsius : ', newTemp);
}

function convertKelvinToFahrenheit(temp) {
    let newTemp = (temp - 273.15) * 9/5 + 32

    console.log('This is the new converted kelvin temperature to Fahrenheit : ', newTemp);
}

function convertFahrenheitToCelsius(temp) {
    let newTemp = (temp - 32) * 5/9

    console.log('This is the new converted fahrenheit temperature to Celsius : ', newTemp);
}

function convertFahrenheitToKelvin(temp) {
    let newTemp = (temp - 32) * 5/9 + 273.15

    console.log('This is the new converted fahrenheit temperature to Kelvin : ', newTemp);
}
convertCelsiusToKelvin()
convertCelsiusToFahrenheit()  
convertKelvinToCelsius()
convertKelvinToFahrenheit()
convertFahrenheitToCelsius()
convertFahrenheitToKelvin()











