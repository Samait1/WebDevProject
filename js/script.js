const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;

    if(fullname.length < 3){

        alert("Name must contain at least 3 characters.");
        return;

    }

    if(password.length < 8){

        alert("Password must be at least 8 characters.");
        return;

    }

    alert("🎉 Sign Up Successful!");

    signupForm.reset();

});