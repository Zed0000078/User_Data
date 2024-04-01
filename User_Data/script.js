var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'
        return false
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required!'
        return false
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Please enter a 10 digit phone number"
        return false
    }
    if(isNaN(phone)) {
        phoneError.innerHTML = 'Please give a valid number'
        return false
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
    // if(phone.match())
}

function validateEmail(){
    var email = document.getElementById('email').value
    if(email.length == 0){
        emailError.innerHTML = 'Email field can\'t be empty';
        return false
    }
    if(!email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
        emailError.innerHTML = 'email is invalid!'
        return false
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true

}

function validateMessage(){
    var message = document.getElementById('message').value 
    var required = 30
    var left = required - message.length
    if(left > 0){
        messageError.innerHTML = left + ' more characters required!'
        return false
    }
    
    
    // if(message.length == 0){
    //     messageError.innerHTML = 'message field can\'t be empty!'
    //     return false 
    // }
    // if(message.length<30){
    //     messageError.innerHTML = 'message field must be 30 characters long.'
    //     return false
    // }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

// function validateEmailFormat(email){
//     // var email = document.getElementById('email').value 
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return  regex.test(email);
// }


function validateForm(){
    if(!validateName () || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'something went wrong! please check the fields and try again!'
        setTimeout(() => {
            (submitError.style.display='none')
        }, 3000);
        return false;
    } 
    // var submit = document.getElementById('submit-error')
    Swal.fire({
        text: "Do you want to sign up!",
        confirmButtonText: "Yes",
        denyButtonText: "No",
        showDenyButton: true,
        // buttonWidth: '3em',
        // buttonHeight: 400,
      });
      return false
}