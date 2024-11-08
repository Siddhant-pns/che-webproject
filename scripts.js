
let users = JSON.parse(localStorage.getItem("users")) || {};


function showSignUp() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
}


function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
}


function populateRecipients() {
    const recipientDropdown = document.getElementById("recipient");
    recipientDropdown.innerHTML = "";

    
    Object.keys(users).forEach(username => {
        const option = document.createElement("option");
        option.value = username;
        option.textContent = username;
        recipientDropdown.appendChild(option);
    });
}


function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        document.getElementById("loginMessage").textContent = "Login successful!";
        document.getElementById("loginMessage").style.color = "green";
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
        document.getElementById("loginMessage").style.color = "red";
    }
}


function signUp() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    if (newUsername && newPassword) {
        if (!users[newUsername]) {
            users[newUsername] = newPassword;
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("signUpMessage").textContent = "Sign-up successful! You can now log in.";
            document.getElementById("signUpMessage").style.color = "green";
            populateRecipients(); 
        } else {
            document.getElementById("signUpMessage").textContent = "Username already exists!";
            document.getElementById("signUpMessage").style.color = "red";
        }
    } else {
        document.getElementById("signUpMessage").textContent = "Please fill in both fields.";
        document.getElementById("signUpMessage").style.color = "red";
    }
}


function sendMessage() {
    const messageContent = document.getElementById("messageContent").value;
    const recipient = document.getElementById("recipient").value;

    if (messageContent) {
        document.getElementById("messageStatus").textContent = `Message sent to ${recipient}!`;
        document.getElementById("messageContent").value = ""; // Clear the text field
    }
}


window.onload = populateRecipients;
