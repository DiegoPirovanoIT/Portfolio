const boxes = document.querySelectorAll('.box'); // Target the parent boxes
const testi_italiani = document.querySelectorAll(".it")
const testi_inglesi = document.querySelectorAll(".en")
let LANG_SEL = "it"; // CHANGE HERE IF YOU WANT TO CHANGE THE DEFAULT LANGUAGE TO en

boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get the value of the clicked box (the language code)
        const selectedLanguage = box.getAttribute('value');

        // Update the LANG_SEL variable
        LANG_SEL = selectedLanguage;

        cambiaLingua();
        
    });
});


function cambiaLingua(){
    
    if(LANG_SEL == "it"){
        testi_italiani.forEach(t => {
            t.classList.remove("disabled")
        });
        testi_inglesi.forEach(t => {
            t.classList.add("disabled")
        });
    }
    else{
        testi_italiani.forEach(t => {
            t.classList.add("disabled")
        });
        testi_inglesi.forEach(t => {
            t.classList.remove("disabled")
        });
    }
    /*
    deleteVideo();
    playAgain();
    */
    
}

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        boxes.forEach(b => {
            const flag = b.querySelector('.flag'); // Get the flag inside the box
            if (b !== box) {
                flag.classList.add('language-non-selected');
                flag.classList.remove('language-selected');
            } else {
                flag.classList.add('language-selected');
                flag.classList.remove('language-non-selected');
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        boxes.forEach(b => {
            const flag = b.querySelector('.flag'); // Get the flag inside the box
            if (flag.getAttribute('value') === LANG_SEL) {
                flag.classList.remove('language-non-selected');
                flag.classList.add('language-selected');
            } else {
                flag.classList.remove('language-selected');
                flag.classList.add('language-non-selected');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    cambiaLingua();
});