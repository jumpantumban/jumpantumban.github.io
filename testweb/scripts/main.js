  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);


var myImage = document.querySelector('img');
var myHeading = document.querySelector('h1');



var myButton = document.querySelector('button');



myImage.onclick = function() {
var mySrc = myImage.getAttribute( 'src');
if (mySrc === 'images/flower.png'){

myImage.setAttribute('src' , 'images/w.png'); //read and changed 
myHeading.textContent = 'My world dragul!';  // replaced text content

}else{
myImage.setAttribute('src' , 'images/flower.png');
myHeading.textContent = 'Dragool like the YelooooooW :)'; 
}


/*
setUser(){

  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'She s the one for', ' + storedName;

myImage.setAttribute('src' , 'images/ww.png');

}*/

myButton.onclick = function() {


  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'She s the one for' + storedName;
var src = myImage.getAttribute( 'src');
myImage.setAttribute('src' , 'images/ww.png');

}



}