function scrollToPosition(positionY) {
    window.scrollTo({
        top: positionY,
        behavior: 'smooth' 
    });
}



function showMessage() {
    alert("Try it later.");
}




  

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
  
   
    console.log("Name: " + name);
    console.log("email: " + email);
    
})

function showMessage() {
    alert("We have a big activity in our site, please try it later.");
}


    

  
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});