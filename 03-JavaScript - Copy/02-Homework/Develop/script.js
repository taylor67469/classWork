// Assignment Code
var generateBtn = document.querySelector("#generate");
var myString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
var thePass='';
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//makes password
function generatePassword(){
  //prompts length of pass
  var myLength=prompt("what is the length of  the password? No more than 128 characters");
  //makes password length an integer
  myLength=parseInt(myLength);
  //continues to prompt the user if password isnt desired length
  while(myLength<8||myLength>128){
    var myLength=prompt("You chose above the length or below, what is the length of  the password? No more than 128 characters");

  }
  alert("you chose the length to be "+ myLength);
  //prompts for lowercase letters
  var myLower=prompt("Would you like the password to have lowercase letters?");
if(myLower==="yes"||myLower==="Yes"){
    alert("You chose to have lowercase letters.");
}
else if(myLower==="no"||myLower==="No"){
  myString=myString.replace('abcdefghijklmnopqrstuvwxyz', '');
  alert("You have chose not to have lowercase letters.");
}
//prompts for uppercase letters
var myUpper=prompt("Would you like the password to have uppercase letters?");
if(myUpper==="yes"||myUpper==="Yes"){
  alert("You chose to have uppercase letters.");
}
else if(myUpper==="no"||myUpper==="No"){
  myString=myString.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
  alert("You chose not to have uppercase letters.");
}
//prompts for numbers
var myNum=prompt("Would you like the password to have numbers?");
if (myNum==="yes"||myNum==="Yes"){
  alert("You chose to have numbers.");
}
else if(myNum==="no"||myNum==="No"){
  myString=myString.replace("0123456789", '');
  alert("You chose not to have numbers.");
}
//prompts for special characters
var myChars=prompt("Would you like the password to have special characters?");
if (myChars==="yes"||myChars==="Yes"){
  alert("You chose to have special characters.");
}
// if chars no then 
if (myChars==="no"||myChars==="No"){
  myString=myString.replace('@#$','')
  alert("You chose not to have special characters.");
}
//makes my password based on the length chosen
for(i=0;i<myLength;i++){
  var myPass= Math.floor(Math.random()* myString.length);
  thePass+=myString.charAt(myPass);
}
//sends the password to var password in writePassword
return thePass;
 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
