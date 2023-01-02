// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello world!";
document.querySelector("button").addEventListener("click", function () {
  alert("You clicked a button");
});

let myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image01.jpg") {
    myImage.setAttribute("src", "images/image02.jpg");
  } else {
    myImage.setAttribute("src", "images/image01.jpg");
  }
};

function setUserName() {
  let myName = prompt("Please enter your name: ");
  localStorage.setItem('name',myName);
  myHeading.textContent = "Welcome" + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
