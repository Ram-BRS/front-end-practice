function validateForm() {
    var username = document.getElementById('username').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validations
    if (username === "" || mobile === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}