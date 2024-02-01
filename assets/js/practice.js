function validateForm() {
    var username = document.getElementById("username")
    var mobile = document.getElementById("mobile")
    var password = document.getElementById("password")
    var confirmPassword = document.getElementById("confirmPassword")

    // Perform your validation checks here
    if (username === "" || mobile === "" || password === "" || confirmPassword === "") {
        alert("All fields are required");
        return;
    }

}