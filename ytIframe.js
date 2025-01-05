// Load the YouTube API script dynamically
const script = document.createElement('script');
script.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(script);

// Global variable to store the player instance and to track API readiness
let player;
let isAPIReady = false;

// This function is called when the API is ready
function onYouTubeIframeAPIReady() {
    isAPIReady = true; // Mark the API as ready
    createPlayer();    // Call function to create the player
}

// Create the player instance
function createPlayer() {
    if (!isAPIReady) return; // Ensure the API is ready before creating the player
    player = new YT.Player('iframe', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function deleteVideo() {
    const iframe = document.getElementById('iframe');
    if (iframe) {
        iframe.remove();
    }
}
// This function is triggered when the state of the player changes
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        // Delete the iframe when the video ends
        deleteVideo();

        // Show the "Play Again" button after the video ends
        LANG_SEL === "it" ? document.getElementById('play_again_it').style.display = 'block' : document.getElementById('play_again_en').style.display = 'block';
    }
}


// Event listener to play the video again when the button is clicked
document.getElementById('play_again_it').addEventListener('click', playAgain);
document.getElementById('play_again_en').addEventListener('click', playAgain);

function playAgain() {

    //check if there is still the video playing.
    if (document.getElementById("iframe_container_" + LANG_SEL).childElementCount > 0) { return; }
    else {
        // Recreate the iframe and append it to the container
        const iframeContainer = LANG_SEL === "it" ? document.getElementById('iframe_container_it') : document.getElementById('iframe_container_en');
        const iframe = document.createElement('iframe');
        iframe.id = 'iframe';
        iframe.src = "https://www.youtube.com/embed/dLenFpuUsm4?enablejsapi=1";
        iframe.title = "Portfolio Introduction";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media;";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";

        // Set the width and height of the iframe directly in JavaScript
        iframe.style.width = "100%"; // Set width to 95% of the container
        iframe.style.height = "10S0%"; // Set height to 60% of the container

        iframeContainer.appendChild(iframe);

        // Hide the "Play Again" button
        document.getElementById('play_again_it').style.display = 'none';
        document.getElementById('play_again_en').style.display = 'none';

        // Wait for the API to be ready and then initialize the player
        if (isAPIReady) {
            createPlayer(); // Create the player again after iframe is added
        } else {
            // If API isn't ready yet, wait for it to load
            script.onload = createPlayer;
        }
    }

}

// Initialize the player when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    playAgain(true);
});
