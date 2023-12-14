function runTypingEffect() {

    const text = "Hello I am Aristeidis Zermpinis";
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
    
document.addEventListener("DOMContentLoaded",  runTypingEffect)