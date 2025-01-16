console.log("lets dhamaka with doms");

function makeRed() {
    document.body.style.backgroundColor='red';
}

 // Function to make the background color red
 function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option three.

const makeElebtn = document.getElementById('make-blue');
    // console.log(makeElebtn);
    makeElebtn.onclick = makeBlue;

     function makeBlue() {
        document.body.style.backgroundColor = 'blue';
    }

    // Get the button with ID 'make-blue' and assign functionality
    const makeBlueBtn = document.getElementById('make-blue');
    makeBlueBtn.onclick = function () {
        document.body.style.backgroundColor = 'blue';
    };



    // Get the button with ID 'make-purple' and assign functionality
    const makePurpleBtn = document.getElementById('make-purple');
    makePurpleBtn.onclick = function () {
        document.body.style.backgroundColor = 'purple';
    };


// option - 4 
const pinklButton = document.getElementById('make-pink');
    // console.log(pinlButton);
    pinklButton.addEventListener('click', makePink);
    
    function makePink () {
        document.body.style.backgroundColor = 'pink';
    }

// option - 4 (another).
const makeGreen = document.getElementById('make-green');
    makeGreen.addEventListener('click', function makeGreenBtn() {
        document.body.style.backgroundColor = 'green';
    })

