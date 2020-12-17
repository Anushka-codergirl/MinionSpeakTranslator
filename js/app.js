/*

var username = prompt("What's your name?");
var greetingMsg = "Welcome! " + username;
alert(greetingMsg);

*/

var submitButton = document.querySelector("#input-btn");

var textInput = document.querySelector("#text-translator");

var translateOutput = document.querySelector("#text-output");

//console.log(textInput);

var textOutput = document.querySelector("#text-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function Translate(text){
    return url + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error!",error);
}


function clickHandler(){
   // textOutput.innerText = "Hey There!" + textInput.value;

   var inputText = textInput.value;
    
   fetch(Translate(inputText)).then(response => response.json()).then(json => {
       var translatedText = json.contents.translated;
       textOutput.inputText = translatedText;
   }).catch(errorHandler)

}

submitButton.addEventListener("click",clickHandler);