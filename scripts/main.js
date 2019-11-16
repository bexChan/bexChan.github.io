let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if (mysrc === 'images/meg-and-bex.jpg') {
        myImage.setAttribute ('src', 'images/Masterton.jpg');
    } else {
        myImage.setAttribute('src', 'images/meg-and-bex.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//Setting the username
function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I think you are really cool - ' + myName;
    }
}

// Checking to see if there is a stored username already
if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I think you are the bees knees, ' + storedName;
}

// Action: button clicking
myButton.onclick = function() {
    setUserName();
}