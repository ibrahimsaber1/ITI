
// -----------------lab1-q3 ----------------- :)

function math_ex(expression){
    return eval(expression);
}

document.getElementById('mathButton').addEventListener("click",function(){
    var expression = prompt("Enter mathButton");
    var result = math_ex(expression);
    alert ('you entered: '+ expression + "and the result = " + result)
});

// -----------------lab1-q3 ----------------- :)

document.getElementById("A_count").addEventListener("click",function(){
    var script = prompt("Enter Your script");
    var count_A = ((script.match(/A/g) || []).length);
    alert ('the A count is: '+ count_A )
});

// -----------------lab2-q1 ----------------- :)
var tips = [
    "Always declare variables with const or let.",
    "Use === instead of == for equality checks.",
    "Avoid using global variables.",
    "Use meaningful variable and function names.",
    "Keep your code DRY (Don't Repeat Yourself).",
    "Use arrow functions for concise syntax.",
    "Understand the difference between var, let, and const.",
    "Use template literals for string interpolation.",
    "Always handle asynchronous code with Promises or async/await.",
    "Use strict mode to write secure JavaScript."
];

document.getElementById("tip").addEventListener("click",function(){
    var randomIndex = Math.floor(Math.random() * tips.length);
    var showRandomTip = tips[randomIndex]
    alert(showRandomTip)
});

// -----------------lab2-q2 ----------------- :)

document.getElementById("date").addEventListener("click",function(){
    // var now = new Date().toLocaleTimeString("AR-EG")
    var now = new Date().toLocaleString("AR-EG")
    alert(now)
});

// -----------------lab2-q3 ----------------- :)

function math_ex(expression){
    return eval(expression);
}

document.getElementById('mathButton2').addEventListener("click",function(){
    try {
        var expression = prompt("Enter mathButton");
        var result = math_ex(expression);
        alert ('you entered: '+ expression + "and the result = " + result)
    } catch (error) {
        alert ('you entered a non valied expression');
    }
});

// -----------------lab2-q4 ----------------- :)


function validateAndParseDate(input) {
    if (input.length !== 10 || input[2] !== '-' || input[5] !== '-') {
        alert("Wrong Date Format");
        return;
    }

    var day = parseInt(input.slice(0, 2), 10);
    var month = parseInt(input.slice(3, 5), 10) -1 ;
    var year = parseInt(input.slice(6, 10), 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Wrong Date Format");
        return;
    }

    var date = new Date(year, month, day);
    alert("Date: " + date.toDateString());
}

document.getElementById("showDateButton").addEventListener("click", function() {
    var userInput = prompt("Enter the date of today (DD-MM-YYYY):");
    validateAndParseDate(userInput);
});

// -----------------lab2-q5 ----------------- :)

function count_num(array, number) {
    var count = 0;
    for (var i of array) {
        if (i == number) {
            count++;
        }
    }
    return count;
}

var array = [1, 2, 3, 4, 2, 2, 5, 2];
var number = 2;
var count1 = count_num(array, number)
console.log("numbers of appearens = " +count1); 




// // -----------------lab2-q6 ----------------- :)


function remove_chr(array2, char) {
    var array3 = [];

    for (var i = 0; i < array2.length; i++) {
        if (array2[i] !== char) {
            array3.push(array2[i]);
        }
    }
    return array3;
}

var array2 = ['a', 'b', 'c', 'a', 'd', 'a'];
var char = 'a';
var result = remove_chr(array2, char);

console.log(result);



// // -----------------lab2-q7 ----------------- :)


function Max_num(array5) {
    return Math.max(...array5);
}

var array5 = [1, 2, 30, 4, 5];
console.log('the max number is: ' + Max_num(array5));

