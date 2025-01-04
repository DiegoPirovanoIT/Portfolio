var content_description = [];
let removeDescriptionTimeOut;

document.addEventListener('DOMContentLoaded', function() {
    history.replaceState({ action: 'initial' }, null, '');

    // Add event listener for scrolling to the 'more-info' section
    let buttons = document.getElementsByClassName("grid-item");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => goToMoreInfo(buttons[i].getAttribute("value")));
    }

    // Add event listener for the 'Back to Top' button
    let backToTopButtons = document.getElementsByClassName("back-to-top");
    for (let i = 0; i < backToTopButtons.length; i++) {
        backToTopButtons[i].addEventListener('click', scrollToTop);
    }
    content_description = document.getElementsByClassName("description");
});


// Function to scroll to the 'more-info' section
function goToMoreInfo(value) {
    history.pushState({ action: 'scroll_down' }, null, '');
    console.log(history.pushState.length);
    document.getElementById("more-info").classList.remove("disabled");
    clearTimeout(removeDescriptionTimeOut);

    document.querySelector('.top').scrollIntoView({behavior: 'smooth'});
    document.querySelector('.back-to-top:not(.disabled)').scrollIntoView({behavior: 'smooth'});

    for (let i = 0; i < content_description.length; i++) {
        const desc = content_description[i];
        if (desc.classList.contains(value)) {
            desc.classList.remove('disabled');
        } else {
            desc.classList.add('disabled');
        }
    }
}

function removeDescription(){
    document.getElementById("more-info").classList.add("disabled");
    for (let i = 0; i < content_description.length; i++) {
        const desc = content_description[i];
        if (!desc.classList.contains("disabled")) {
            desc.classList.add('disabled');
        }
    }
}

function scrollToTop() {
    document.querySelector('.top').scrollIntoView({
        behavior: 'smooth'
    });
    console.log("Scrolling back to the top");

    removeDescriptionTimeOut = setTimeout(removeDescription, 1000);
}


// Listen for the back button (popstate event)
window.addEventListener('popstate', (event) => {
    console.log("scroll top 1")
    if (event.state && event.state.action === "scroll_down") {
        // Call the reverse action function when user presses the back button
        console.log("scroll top 2")
        scrollToTop();
    }
});



