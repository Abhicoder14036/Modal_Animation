const trickBtn = document.getElementById('trick');

const btnContainer = document.querySelector('.btn-container');


//Intital Position
btnContainer.style.flexDirection = 'row';

trickBtn.addEventListener('mouseover' , (e) => {
    const currentDirection = btnContainer.style.flexDirection;


    if(currentDirection=='row') {
        btnContainer.style.flexDirection = 'row-reverse';
    }

    else {
        btnContainer.style.flexDirection = 'row';
    }
})


$(document).ready(function() {
    $("#open").click(function() {
        $(".popup").toggle();
    });
});