var nameInput = document.getElementById("name-input");
var emailInput = document.getElementById("email-input"); 


nameInput.addEventListener("keydown", enterPressedName);
    function enterPressedName(evt){
        if (evt.keyCode == 13){
            console.log(nameInput.value);
            localStorage.setItem("name", nameInput.value);
        }
    }

emailInput.addEventListener("keydown", enterPressedEmail);
    function enterPressedEmail(evt){
        if (evt.keyCode == 13){
            console.log(emailInput.value);
            localStorage.setItem("email", emailInput.value);
        }
    }

