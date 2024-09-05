const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const mail = document.getElementById("email");
const msg = document.getElementById("message");
const errorMsg = document.getElementsByClassName("error");
function validForm(){
    if(firstName.value.length < 1){
        errorMsg[0].innerText = "Please enter your first name...";
        firstName.classList.add("error-border");
    }
    else{
        errorMsg[0].innerText = "";
        firstName.classList.remove("error-border");
    }

    if(lastName.value.length < 1){
        errorMsg[1].innerText = "Please enter your first name...";
        lastName.classList.add("error-border");
    }
    else{
        errorMsg[1].innerText = "";
        lastName.classList.remove("error-border");
    }

    if(!isValidEmail(mail.value)){
        errorMsg[2].innerText = "Invalid email address...";
        mail.classList.add("error-border");
    }
    else{
        errorMsg[2].innerText = "";
        mail.classList.remove("error-border");
    }

    if(msg.value.length < 1){
        errorMsg[3].innerText = "Please enter your first name...";
        msg.classList.add("error-border");
    }
    else{
        errorMsg[3].innerText = "";
        msg.classList.remove("error-border");
    }
}
function isValidEmail(mail){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(mail);
}

