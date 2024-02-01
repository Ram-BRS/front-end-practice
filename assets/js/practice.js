function validateForm() {
    var username = document.getElementById('username').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (username.trim() === '' || mobile.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert("Please fill in all the required fields.");
        return false;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}