// Question 1 & 2: Login Form with Remember Me-------------:)

document.addEventListener('DOMContentLoaded', function () {
    var savedName = localStorage.getItem('Name');
    var savedPass = localStorage.getItem('Password');

    if (savedName && savedPass) {
        document.getElementById('fullName').value = savedName;
        document.getElementById('password2').value = savedPass;
    }
});


// A: Yes, you can use Session because nothing disallows it.
// B: localStorage saves the data until they are removed by the user or a set of code,
//     while sessionStorage saves the data during the session only until the tab is closed.

// Yes, you can access the data using those two methods within the same domain or website.

function saveData(event) {
    event.preventDefault();
    
    var name = document.getElementById('fullName').value;
    var pass = document.getElementById('password2').value;
    var check = document.getElementById('check').checked;

    if (check) {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pass);
    } else {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
    }

    alert('Logged in successfully');
}

// Question 3: Student JSON Object --------:)

var studentInfo = [
    {
        ID: 1,
        name: 'Ibrahim Saber',
        Age: 24,
        Address: null,
        Skills: ['SQL', 'CSS', 'JavaScript', 'Python'],
        IsLeader: false
    },
    {
        ID: 2,
        name: 'Ali Tarek',
        Age: 22,
        Address: null,
        Skills: ['HTML', 'CSS', 'JavaScript', 'C++', 'Python'],
        IsLeader: true
    },
    {
        ID: 3,
        name: 'Mostafa Ashraf',
        Age: 25,
        Address: null,
        Skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++', 'Java'],
        IsLeader: false
    }
];

studentInfo.forEach(student => {
    console.log(`Student Name: ${student.name}`);
    console.log('Skills:');
    student.Skills.forEach(skill => {
        console.log(`- ${skill}`);
    });
});

// Question 5: AJAX User Data Retrieval ----------------------:)

function displayUser() {
    var userID = document.getElementById('retrieve').value;
    var identity = document.getElementById('id');
    var fName = document.getElementById('first-name');
    var lName = document.getElementById('last-name');
    var image = document.getElementById('image');

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', `https://reqres.in/api/users/${userID}`, true);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var convertedText = JSON.parse(this.responseText);
            identity.textContent = `User ID: ${convertedText.data.id}`;
            fName.textContent = `First Name: ${convertedText.data.first_name}`;
            lName.textContent = `Last Name: ${convertedText.data.last_name}`;
            image.setAttribute('src', convertedText.data.avatar);
        } else if (xhttp.readyState == 4) {
            identity.textContent = "User ID not found";
            fName.textContent = "";
            lName.textContent = "";
            image.setAttribute('src', "");
        }
    };
    xhttp.send();
}

function saveToSelect() {
    var dropdown = document.getElementById('dropdown');
    var identity = document.getElementById('id');
    var fName = document.getElementById('first-name');
    var lName = document.getElementById('last-name');
    var image = document.getElementById('image');
    
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://reqres.in/api/users', true);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var responseData = JSON.parse(xhttp.responseText);
            var users = responseData.data;

            dropdown.innerHTML = '';

            var defaultOption = document.createElement('option');
            defaultOption.textContent = 'Select A Name';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            dropdown.appendChild(defaultOption);

            users.forEach(user => {
                var option = document.createElement('option');
                option.textContent = `${user.first_name} ${user.last_name}`;
                option.value = user.id; 
                dropdown.appendChild(option);
            });

            dropdown.addEventListener('change', function() {
                var selectedUserId = this.value;
                if (selectedUserId !== 'Select A Name') {
                    getUserData(selectedUserId);
                } else {
                    identity.textContent = '';
                    fName.textContent = '';
                    lName.textContent = '';
                    image.src = '';
                }
            });
        }
    };

    xhttp.send();

    function getUserData(userID) {
        var xhttpUser = new XMLHttpRequest();
        xhttpUser.open('GET', `https://reqres.in/api/users/${userID}`, true);

        xhttpUser.onreadystatechange = function () {
            if (xhttpUser.readyState == 4 && xhttpUser.status == 200) {
                var userData = JSON.parse(xhttpUser.responseText);
                identity.textContent = `User ID: ${userData.data.id}`;
                fName.textContent = `First Name: ${userData.data.first_name}`;
                lName.textContent = `Last Name: ${userData.data.last_name}`;
                image.src = userData.data.avatar;
            } else if (xhttpUser.readyState == 4) {
                identity.textContent = "User ID not found";
                fName.textContent = '';
                lName.textContent = '';
                image.src = '';
            }
        };

        xhttpUser.send();
    }
}
saveToSelect();

// Question 6: Validate Input -----------------------------:)

function validateInput() {
    var fullName = prompt("Please enter your Full Name:");
    var email = prompt("Please enter your Email Address:");

    var fullNamePattern = /^(?!\s)[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com\.eg|net\.eg|edu\.eg|org\.eg)$/;

    if (fullNamePattern.test(fullName)) {
        alert("Full Name is valid: " + fullName);
    } else {
        alert("Full Name is invalid: " + fullName);
    }

    if (emailPattern.test(email)) {
        alert("Email is valid: " + email);
    } else {
        alert("Email is invalid: " + email);
    }
}
