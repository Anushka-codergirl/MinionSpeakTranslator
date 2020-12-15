var username = prompt("What's your name?");

var greetingMsg = "Welcome! " + username;

alert(greetingMsg);

var submitButton = document.querySelector("#input-btn");

var textInput = document.querySelector("#text-translator");

var translateOutput = document.querySelector("#text-output");

console.log(textInput);



submitButton.addEventListener("click",clickHandler);

var textOutput = document.querySelector("#text-output");

textOutput.innerText = "Some output";


function clickHandler(){
    console.log("clicked");
    console.log("input",textInput.value);
    console.log(textOutput); 
}