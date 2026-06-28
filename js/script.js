// sign up form validation
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    let fullname = document.getElementById("signupFullname").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let phone = document.getElementById("signupPhone").value.trim();
    let password = document.getElementById("signupPassword").value;

    if(fullname.length < 3){

        alert("Name must contain at least 3 characters.");
        return;

    }

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        alert("Please enter a valid email address.");
        return;

    }

    if(password.length < 8){

        alert("Password must be at least 8 characters.");
        return;

    }

    if(!phone.match(/^\d{10}$/)){

        alert("Please enter a valid 10-digit phone number.");
        return;

    }

    alert("🎉 Sign Up Successful!");

    signupForm.reset();

});


//sign in form validation
const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("signinEmail").value.trim();
    let password = document.getElementById("signinPassword").value;

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        alert("Please enter a valid email address.");
        return;

    }

    if(password.length < 8){

        alert("Password must be at least 8 characters.");
        return;

    }

    alert("🎉 Sign In Successful!");

})
