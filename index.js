// Function to scroll to the 'more-info' section
function scrollToContent() {
    document.getElementById('more-info').scrollIntoView({
        behavior: 'smooth'
    });
    console.log("Scrolling to More Info section");
}

// Function to scroll back to the top of the page or a specific section
function scrollToTop() {
    document.querySelector('.top').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling back to the top
    });
    console.log("Scrolling back to the top");
}

// Add event listener for scrolling to the 'more-info' section
let buttons = document.getElementsByClassName("grid-item");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', scrollToContent);
}

// Add event listener for the 'Back to Top' button
document.getElementById('back-to-top').addEventListener('click', scrollToTop);
