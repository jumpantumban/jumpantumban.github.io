  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);


var myImage = document.querySelector('img');
var myHeading = document.querySelector('h1');





myImage.onclick = function() {
var mySrc = myImage.getAttribute( 'src');
if (mySrc === 'testweb/images/flower.png'){

myImage.setAttribute('src' , 'testweb/images/w.png'); //read and changed 
myHeading.textContent = 'My world dragul!';  // replaced text content

}else{
myImage.setAttribute('src' , 'testweb/images/flower.png');
myHeading.textContent = 'Dragool like the YelooooooW :)'; 
}


/*
setUser(){

  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'She s the one for', ' + storedName;

myImage.setAttribute('src' , 'images/ww.png');

}*/
var myButton = document.querySelector('button');
var myImage2 = document.querySelector('img');

myButton.onclick = function() {


  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'She s the one for' + storedName;
var src2 = myImage.getAttribute( 'src');
myImage2.setAttribute('src' , 'testweb/images/ww.png');

}



}
