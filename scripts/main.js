//var myHeading = document.querySelector('h5');
//myHeading.textContent = 'Hello world!';
//myHeading.textContent = 6+9;

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Mozilla-Firefox-4-free-Logo1.jpg') {
      myImage.setAttribute ('src','images/Mozilla-Firefox-4-free-Logo2.jpg');
    } else {
      myImage.setAttribute ('src','iimages/Mozilla-Firefox-4-free-Logo1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name!');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool neh!, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

