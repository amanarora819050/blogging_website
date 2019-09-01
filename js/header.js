// Get the modal
let modalSignin = document.getElementById("signIn");
let modalSignUp = document.getElementById("signUp");

// Get the button that opens the modal
let signInBtn = document.getElementById("signInBtn");
let signUpBtn = document.getElementById("signUpBtn");
let signupInsideSignIn = document.getElementById("signUpInsideSignIn");

// Get the <span> element that closes the modal
let span = document.getElementById("close");
let spanSignUp = document.getElementById("closeSignUp");

// When the user clicks on the button, open the modal 

signInBtn.addEventListener('click',(e)=>{

    modalSignin.style.display="flex";

})

signUpBtn.addEventListener('click',(e)=>{

    modalSignUp.style.display="flex";

})

signupInsideSignIn.addEventListener('click',(e)=>{
    
    modalSignin.style.display = "none";
    modalSignUp.style.display="flex";

})

// When the user clicks on <span> (x), close the modal

span.addEventListener('click',(e)=>{
    modalSignin.style.display = "none";
})

spanSignUp.addEventListener('click',(e)=>{
    modalSignUp.style.display = "none";
})



// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  
  if (event.target == modalSignin) {
    modalSignin.style.display = "none";
    
  }

  if (event.target == modalSignUp) {
    modalSignUp.style.display = "none";
  }
  
}