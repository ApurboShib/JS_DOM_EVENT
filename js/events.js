console.log("lets dhamaka with doms");

function makeRed() {
    document.body.style.backgroundColor='red';
}

// option three.

const makeElebtn = document.getElementById('make-blue');
    // console.log(makeElebtn);
    makeElebtn.onclick = makeBlue;

     function makeBlue() {
        document.body.style.backgroundColor = 'blue';
    }