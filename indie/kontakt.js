const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message'); 
const errorMsg = document.querySelector('#errorMsg');
const buttonSubmit = document.querySelector('#submit');

let nameError = document.querySelector('#name-error')
let emailError = document.querySelector('#email-error')
let messageError = document.querySelector('#message-error')
let messageSuccess = document.querySelector('#message-success')

buttonSubmit.addEventListener('click',function(event){
  
event.preventDefault();
  
 if(inputName.value == '' ){
    
   nameError.innerHTML = 'A name is required';
    function clear() {
      nameError.innerHTML = '';
    }setTimeout(clear,2000)
  }

 else if(inputEmail.value == ''){
    emailError.innerHTML = 'An email is required';
    function clear() {
      emailError.innerHTML = '';
    }setTimeout(clear,2000)
  }
  else if(inputMessage.value == ''){
    messageError.innerHTML = 'A message is required';
    function clear() {
      messageError.innerHTML = '';
    }setTimeout(clear,2000)
  }
 
  else{
    messageSuccess.innerHTML = 'Thank you for your message, we will get back to you as soon as possible!';
    
  }
});