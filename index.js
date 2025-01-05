var content_description = [];
let removeDescriptionTimeOut;

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < 10; i++) {
        history.pushState({ action: 'initial' }, null, '');
    }


    // Add event listener for scrolling to the 'more-info' section
    let buttons = document.querySelectorAll('.grid-item:not(.non_clickable)');
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
    if (value == "CV") {
        if (LANG_SEL === "it") {
            // Open the Italian CV in a new tab
            window.open("doc/Pirovano Diego CV ITA.pdf", "_blank");
        } else {
            // Open the English CV in a new tab
            window.open("doc/Pirovano Diego CV EN.pdf", "_blank");
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            history.pushState({ action: 'initial' }, null, '');
        }
        console.log(history.pushState.length);
        document.getElementById("more-info").classList.remove("disabled");
        clearTimeout(removeDescriptionTimeOut);

        

        for (let i = 0; i < content_description.length; i++) {
            const desc = content_description[i];
            if (desc.classList.contains(value)) {
                desc.classList.remove('disabled');
            } else {
                desc.classList.add('disabled');
            }
        }


        document.querySelector('.back-to-top:not(.disabled)').scrollIntoView({ behavior: 'smooth', block: "center" });
    }

}

function removeDescription() {
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
    // Call the reverse action function when user presses the back button
    console.log("scroll top 2")
    scrollToTop();
});



