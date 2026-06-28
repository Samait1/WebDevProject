// sign up form validation
const signupForm = document.getElementById("signupForm");

if (signupForm){
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

    if(!signupPhone.match(/^\d{10}$/)){

        alert("Please enter a valid 10-digit phone number.");
        return;

    }

    if(signupPassword.length < 8){

        alert("Password must be at least 8 characters.");
        return;

    }

    

    alert("Sign Up Successful!");

    signupForm.reset();

});

}


//sign in form validation
const signinForm = document.getElementById("signinForm");

if (signinForm){


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
}


// reservation form validation
const reservationForm = document.getElementById("reservationForm");

if (reservationForm){


reservationForm.addEventListener("submit", function(event){

    event.preventDefault();

    let reservationTime = document.getElementById("reservationTime").value;
    let partySize = document.getElementById("reservationPartySize").value;
    let reservationEmail = document.getElementById("reservationEmail").value.trim();

    if (!reservationTime) {
    alert("Please select a reservation date and time.");
    return;
}

let selectedTime = new Date(reservationTime);
let currentTime = new Date();

    if (selectedTime <= currentTime) {
        alert("Please select a future date and time for your reservation.");
        return;
    }

    if(partySize < 1 || partySize > 12){

        alert("Party size must be between 1 and 12.");
        return;

    }

    if(!reservationEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        alert("Please enter a valid email address.");
        return;

    }

    

    

    

    alert("Reservation Successful!");
})
}




