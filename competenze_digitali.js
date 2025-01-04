let currentSlide = 0;
const slide = document.getElementById("slide-Competenze-digtiali");
const contentsIT = document.querySelectorAll(".CompetenzeDigitali .it .content");
const contentsEN = document.querySelectorAll(".CompetenzeDigitali .en .content");
const thumbnails = document.querySelectorAll(".CompetenzeDigitali .thumbnail");
let rotating = false;

function showSlide(index) {
    console.log("show slide");

    if (!rotating) {
        thumbnails[currentSlide].classList.remove("active")
        currentSlide = index;
        thumbnails[currentSlide].classList.add("active")
        rotating = true;

        // Add the first animation class
        slide.classList.add("rotate-first-half");

        // Wait for the first animation to complete
        setTimeout(() => {
            // Update content at the halfway point
            changeContent();

            // Remove the first animation class
            slide.classList.remove("rotate-first-half");

            // Add the second animation class
            slide.classList.add("rotate-second-half");

            // Reset rotation state after the second animation completes
            setTimeout(() => {
                slide.classList.remove("rotate-second-half");
                rotating = false;
            }, 500); // Duration of the second half animation
        }, 500); // Duration of the first half animation
    }
}

function changeContent() {
    console.log("change content");

    // Update the slide content
    slide.innerHTML = LANG_SEL == "it"? contentsIT[currentSlide].innerHTML: contentsEN[currentSlide].innerHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(3);
});