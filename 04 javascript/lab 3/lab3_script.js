// ----------------------- lab3 q1 ---------- ---------------------- :)
var interval;
function startClock() {
    interval = setInterval(function(){
        var date = new Date();
        document.getElementById('clock').innerHTML = date.toLocaleTimeString("AR-EG");
    },1000);
}
function stopclock(){
    clearInterval(interval)
}

// ----------------------- lab3 q2 ---------- ---------------------- :)

var adWindow;
        document.getElementById("openAd").addEventListener("click", function() {
            setTimeout(function() {
                adWindow = window.open("", "_blank", "width=600,height=400");
                adWindow.document.write(`2-Make a link that on its onClick event opens new advertising window after 3 seconds, 
                    and write long paragraphs on it. Also, make another link that closes this page. 
            (Note that the browser may block the opening of the new window; make sure that you allow this page to open popups in your browser).`);
            }, 3000);
        });

        document.getElementById("closeAd").addEventListener("click", function() {
            if (adWindow) {
                adWindow.close();
            }
        });

// ----------------------- lab3 q3 ---------- ---------------------- :)

document.getElementById('loginForm').addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    var username = document.getElementById('username').value;
    var welcoming = window.open("", "_blank", "width=600,height=400");
    welcoming.document.write(`<h1>Welcome, <b>${username}</b>!</h1>`);
});

// ----------------------- lab3 q4 ---------------------- :)
document.getElementById("openPageButton").addEventListener("click", function() {
    var url = "F:/ITI/12) javascript/Day 3/my_work lab3 by ibrahim saber/q4.html";  // Replace with the actual path to your web page
    window.open(url, "_blank");
});



// ----------------------- lab3 q5 ---------------------- :)

function validate() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    var phonePattern = /^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,3}?\))?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email format");
    } else if (!phonePattern.test(phone)) {
        alert("Invalid phone format");
    } else {
        alert("Valid email and phone format");
    }
}