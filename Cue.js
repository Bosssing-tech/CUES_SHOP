let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.display = "block";
}


document.addEventListener("DOMContentLoaded", () => {
    showSlides(); 
    setInterval(showSlides, 3000); 

    
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideMenu = document.querySelector('.side-menu');

    hamburgerMenu.addEventListener('click', () => {
        
        sideMenu.classList.toggle('show');
    });

   
    const infoForm = document.getElementById("infoForm");
    if (infoForm) {
        infoForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            alert("You are already part of the cue community!"); 

            infoForm.reset(); 
        });
    }

    
});
