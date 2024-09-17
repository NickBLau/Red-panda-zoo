//Globale variabler
//DOM elementer
const shirtSlides = document.querySelectorAll(".shirt-slide")
// const shirtDots = document.querySelectorAll(".shirt-dot")

let shirtSlideIndex = 1

//Initial function call on pageload
shirtShowslides(shirtSlideIndex)

// Automatic slide
// window.setInterval(function(){
//     showslides(slideIndex += 1)
// }, 3000)

//functions


//click Handler for prev & next
function shirtPlusSlides(numW){
    shirtShowslides(shirtSlideIndex  += numW)
}

//click handler for dots
function currentSlide(numW){
    shirtShowslides(shirtSlideIndex = numW)
}

// Main Functions
function shirtShowslides(numW){
    if (numW > shirtSlides.length){
        shirtSlideIndex = 1
    }
    if (numW < 1){
        shirtSlideIndex = shirtSlides.length
    }
    

    shirtSlides.forEach(function(element){
        element.style.display = "none"
    })

    // shirtDots.forEach(function(element){
    //     element.classList.remove("active")
    // })

     shirtSlides[shirtSlideIndex-1].style.display = "block"

    // shirtDots[shirtSlideIndex-1].classList.add("active")
}

