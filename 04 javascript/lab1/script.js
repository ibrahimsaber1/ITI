alert("Welcome to my site :)");
var userName = prompt("Please enter your name:");
alert("Welcome " + userName);



// ----------------------------q2 ------------------ :)

function sum(num1, num2) {
    return num1 + num2;
}

document.getElementById("summ").addEventListener("click", function() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var result = sum(num1, num2);
    alert("The sum is: " + result) ;
});

// ----------------------------q5 ------------------ :)

document.getElementById("WordPosition").addEventListener("click", function() {
    var inputString = prompt("Please enter a string:");
    var word = prompt("Please enter a word to search for:");
    var position = inputString.indexOf(word);
    if (position === -1) {
        alert("Not found");
    } else {
        alert("The position of the word is: " + position);
    }
});


// ----------------------------q6 ------------------ :)

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

document.getElementById("convertTempButton").addEventListener("click", function() {
    var celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    var fahrenheit = celsiusToFahrenheit(celsius);
    alert("Temperature in Fahrenheit is: " + fahrenheit);
});




