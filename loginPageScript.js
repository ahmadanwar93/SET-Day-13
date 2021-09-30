var nameInput = document.getElementById("name-input");
var emailInput = document.getElementById("email-input"); 
var goButton = document.getElementById('goButton');

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

goButton.addEventListener("click", saveInput);
function saveInput(){
    if (emailInput.value !== "" && nameInput.value !== ""){
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("name", nameInput.value);
        window.location.href = './morningTask1.html';
    }else{
        alert("Please enter your user name and email");

    }
}

