//Globale variabler
//DOM elementer
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")

let slideIndex = 1

//Initial function call on pageload
showslides(slideIndex)

// Automatic slide
// window.setInterval(function(){
//     showslides(slideIndex += 1)
// }, 3000)

//functions


//click Handler for prev & next
function plusSlides(numX){
    showslides(slideIndex  += numX)
}

//click handler for dots
function currentSlide(numY){
    showslides(slideIndex = numY)
}

// Main Functions
function showslides(numZ){
    if (numZ > slides.length){
        slideIndex = 1
    }
    if (numZ < 1){
        slideIndex = slides.length
    }
    

    slides.forEach(function(element){
        element.style.display = "none"
    })

    // dots.forEach(function(element){
    //     element.classList.remove("active")
    // })
    slides[slideIndex-1].style.display = "block"
    // dots[slideIndex-1].classList.add("active")
}