const box = document.getElementById('box');

const btnRed = document.getElementById('btn-red');

const btnBlack = document.getElementById('btn-black');

const btnGreen = document.getElementById('btn-green');

const btnBlue = document.getElementById('btn-blue');

const quoteButton = document.getElementById('quote-btn');

const modalContainer = document.getElementById('modal-container');

const closeButton = document.getElementById('close-btn');

console.log(closeButton);

// boxRed function
function boxRed(){
	box.style.backgroundColor ='red';
}

// boxBlack function
function boxBlack(){
	box.style.backgroundColor ='black';
}

// boxGreen function
function boxGreen(){
	box.style.backgroundColor ='green';
}

// boxBlue function
function boxBlue(){
	box.style.backgroundColor ='blue';
}

// showModal function

function showModal(){
	modalContainer.style.display = 'block';
}

// hideModal function

function hideModal(){
	modalContainer.style.display ='none';
}


// Event Listener

btnRed.addEventListener('click',boxRed );
btnBlack.addEventListener('click',boxBlack );
btnGreen.addEventListener('click',boxGreen );
btnBlue.addEventListener('click',boxBlue );
quoteButton.addEventListener('click', showModal);
closeButton.addEventListener('click', hideModal);