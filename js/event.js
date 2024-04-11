// option-2
function MakeYellow() {
    document.body.style.backgroundColor = 'yellow'
}

// option-3

const greenButton = document.getElementById('make-green');
greenButton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green'
}

// option-anther-3

const purpleButton = document.getElementById('make-purple')
purpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple'
}

// option-4 anther
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue'
})

// option-4 final

document.getElementById('make-pink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})