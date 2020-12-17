var username = prompt("What's your name?");

var greetingMsg = "Welcome! " + username;

alert(greetingMsg);

var submitButton = document.querySelector("#input-btn");

var textInput = document.querySelector("#text-translator");

var translateOutput = document.querySelector("#text-output");

console.log(textInput);

var textOutput = document.querySelector("#text-output");

function clickHandler(){
    textOutput.innerText = "dfdfdf" + textInput.value;
}

submitButton.addEventListener("click",clickHandler);