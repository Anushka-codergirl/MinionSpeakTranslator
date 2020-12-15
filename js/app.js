var username = prompt("What's your name?");

var greetingMsg = "Welcome! " + username;

alert(greetingMsg);

var submitButton = document.querySelector("#submit");

submitButton.addEventListener("click",() =>{
    console.log("clicked");
})

