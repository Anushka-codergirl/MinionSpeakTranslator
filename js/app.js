var username = prompt("What's your name?");

var greetingMsg = "Welcome! " + username;

alert(greetingMsg);

var submitButton = document.querySelector("#submit");

var textInput = document.querySelector("#input-text");

console.log(textInput);

function clickHandler(){
    console.log("clicked");
    console.log("input",textInput.value);
}

submitButton.addEventListener("click",clickHandler);