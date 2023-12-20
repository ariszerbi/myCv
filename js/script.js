function runTypingEffect() {

    const text = "Hello, I am Aristeidis Zermpinis";
    document.getElementById('myname').textContent= '';
    console.log( document.getElementById('myname').textContent)
    var typingElement =document.getElementById('myname') ;
    const typingDelay = 80;

    typeText(text, typingElement, typingDelay);
}
function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++){
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
          }, delay * i);
        }
    }        
       
document.getElementById('myhome').addEventListener('click', function () {
    if (document.getElementById('myname').textContent === "Hello I am Aristeidis Zermpinis") {
        runTypingEffect();
    }
});
document.getElementById('mynav').addEventListener('mouseover', function () {
    const navbar = document.querySelector('.navbar');
    console.log("the mouse is over the button")
    navbar.classList.remove('navbar-sticky');
    navbar.classList.add('navbar');
});
    
document.addEventListener("DOMContentLoaded", runTypingEffect)
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 90) {
        navbar.classList.add('bg-dark');
        navbar.classList.add('navbar-sticky'); 
              
      }else if (window.scrollY < 90) { 
          navbar.classList.add('bg-dark');  
          navbar.classList.remove('navbar-sticky');
          navbar.classList.add('navbar'); 
      } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('navbar-sticky');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);