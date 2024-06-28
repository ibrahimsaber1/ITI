// ------------------------day 4--------q1 -----------------------:)

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("mouseover", function() {
            fadeOut(img);
        });

        img.addEventListener("mouseout", function() {
            fadeIn(img);
        });
    });

    function fadeOut(element) {
        var opacity = 1;  
        var timer = setInterval(function() {
            if (opacity <= 0.3) {
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            opacity -= 0.1;
        }, 50);
    }

    function fadeIn(element) {
        var opacity = 0.3;  
        var timer = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    }
});

// ------------------------day 4--------q2 -----------------------:)

var colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink","honeydew","hotpink","peru","black"];
var button = document.getElementById("changeColorButton");
var spans = document.getElementsByClassName("spancolor");

button.addEventListener("click", function() {
    Array.from(spans).forEach(span => {
        var randomColor = colors[Math.floor(Math.random() * colors.length)]; // 3lshan akhtar random color
        var randomBgColor = colors[Math.floor(Math.random() * colors.length)]; // random ror the background
        span.style.color = randomColor;
        span.style.backgroundColor = randomBgColor;
    });
});


// ------------------------day 4--------q3 -----------------------:)
var switchButton = document.getElementById("switchButton");
        var passwordInput = document.getElementById("password");

        switchButton.addEventListener("click", function() {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password"; // lama hyla2y type text y3ny el text appear f lama ykhaleh password hy3mlo hidden :)
            }
        });

// ------------------------day 4--------q4 -----------------------:)

var questions = [
    "What is your name?","What is your iti track?","What is your favorite food?","What is your hobby?",
    "What is your favorite movie?","What is your dream job?","What is your favorite book?",
    "What is your favorite animal?","What is your favorite season?","What is your favorite sport?"
];
var currentQuestionIndex = 0;

var questionContainer = document.getElementById("questionContainer");
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");

function showQuestion(index) {
    questionContainer.textContent = questions[index]
};

prevButton.addEventListener("click",function(){
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

nextButton.addEventListener("click",function(){
    if (currentQuestionIndex <  questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
    else{                      // el else part 3lshan yebd2 mn elawel tany lama ywsal le 10 .. :)
        currentQuestionIndex = 0;
        showQuestion(currentQuestionIndex);
    }
});

showQuestion(currentQuestionIndex);

// ------------------------day 4--------q5 -----------------------:)

const colors1 = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    const randomColor = colors1[Math.floor(Math.random() * colors1.length)];
    paragraph.style.color = randomColor;
});


