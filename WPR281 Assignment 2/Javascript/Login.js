// on submit check password and username

onsubmit = function () {
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    if (password == "admin" && username == "admin") {
        document.getElementById("loginForm").action = "TicketDash.html"; // CHANGE TO MAIN PAGE
        alert("Welcome to the website");
    }
    else {
        alert("Please enter a username and password");
        return false;
    }
}
