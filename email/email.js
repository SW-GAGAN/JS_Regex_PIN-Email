const prompt = require("prompt-sync")();

console.log("**Enter a E-Mail ID**");
let email = prompt("Enter a mail: ");

let emailRegex = RegExp('([a-zA-Z0-9./.-])+.([a-zA-Z0-9./.-])?@([a-z]{2,10})+.([a-z]{2,4})?');

if(emailRegex.test(email)){
    console.log("Email enterd is valid");
} else { console.log("Email entered is invalid!");
}