// sign up form validation
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    let signupFullname = document.getElementById("signupFullname").value.trim();
    let signupEmail = document.getElementById("signupEmail").value.trim();
    let signupPhone = document.getElementById("signupPhone").value.trim();
    let signupPassword = document.getElementById("signupPassword").value;

    if(signupFullname.length < 3){

        alert("Name must contain at least 3 characters.");
        return;

    }

    if(!signupEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        alert("Please enter a valid email address.");
        return;

    }

    if(signupPassword.length < 8){

        alert("Password must be at least 8 characters.");
        return;

    }

    if(!signupPhone.match(/^\d{10}$/)){

        alert("Please enter a valid 10-digit phone number.");
        return;

    }

    alert("Sign Up Successful!");

    signupForm.reset();

});


//sign in form validation
const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", function(event){

    event.preventDefault();

    let signinEmail = document.getElementById("signinEmail").value.trim();
    let signinPassword = document.getElementById("signinPassword").value;

    if(!signinEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        alert("Please enter a valid email address.");
        return;

    }


    if(signinPassword.length < 8){

        alert("Password must be at least 8 characters.");
        return;

    }

    alert("Sign In Successful!");

})


// reservation form validation
const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event){

    event.preventDefault();

    let reservationName = document.getElementById("reservationName").value.trim();
    let reservationTime = document.getElementById("reservationTime").value;
    let partySize = document.getElementById("partySize").value;
    let email = document.getElementById("email").value.trim();

    if(reservationName.length < 3){

        alert("Name must contain at least 3 characters.");
        return;

    }

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        alert("Please enter a valid email address.");
        return;

    }

    if(partySize < 1 || partySize > 12){

        alert("Party size must be between 1 and 12.");
        return;

    }

    

    alert("Reservation Successful!");
})
