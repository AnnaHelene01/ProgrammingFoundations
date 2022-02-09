console.log("PROGRAMMING FOUNDATIONS MODUL 1 QUESTIONS");
// MODULE 1.1
console.log("TASKS MODULE 1.1");
// Spørsmål 1
console.log("Exercise 1");
// In js/script.js add another log message, with any text message inside, save and refresh browser.
//Did you see the log entry in the console?
console.log("Any message!");


//SPØRSMÅL 2
console.log("Exercise 2");
//Save and refresh browser. Add a comment over the code snippet describing what it does, 
//and change the text to add your own (nick-) name.
const p = document.getElementById("blankParagraph");
p.textContent = "Hello from Anna"; //HTML teksten endrer seg.


//SPØRSMÅL 3
console.log("Exercise 3");
const ul = document.getElementById("emptyList");
ul.innerHTML = "<li>HTML</li>";
ul.innerHTML += "<li>CSS</li>"; //Denne legger til to ul-er i listen i HTML: HTML og CSS.
//b:
ul.innerHTML += "<li>JavaScript</li>"; //Legger til enda en ul i listen. 


// SPØRSMÅL 4
console.log("Exercise 4");
p.style.color = "red";
p.style.fontWeight = "bold";
// koden over endrer <p> teksten til rød skrift og bold font i html filen!
//b: Make the all the list items from Exercize 3 blue and italic.
ul.style.color = "blue";
//c: Make the background colour of the whole page beige.
document.body.style.backgroundColor = "beige";


//SPØRSMÅL 5 
console.log("Exercise 5");
document.write(7 * 6); //42
//b: In index.html add the following snippet (eg. between the <ul id="emptyList> and <script src="js/script.js"></script>):
console.log("When button pushed. Only 42 is shown on the hole page.")


//SPØRSMÅL 6
console.log("Exercise 6");
//window.alert(23 + 19); //En varsling popper opp på skjermen med 42.
//b: 
//window.alert("The answer is: " + 23 + 19); //Varslingen endres til the answe is 2319.
//c: 
//window.alert("The answer is: " + (23 + 19));// Med paranres blir fasiten riktig i popp-uppen, altså 42.


//SPØRSMÅL 7
console.log("Exercise 7");
//document.body.innerHTML = "";
//Koden sletter alt innhold, utenom style.




console.log("TASKS MODULE 1.2")
// Spørsmål 1
console.log("Exercise 1");
//Make a new variable named firstName and assign it with a string with the value of your first name(s).
//Make another new variable named lastName and assign it with a string with the value of your last name(s).
//Console log out your full name.
var firstName = "Anna";
var lastName = "Sæthre";
console.log(firstName + " " + lastName); // Anna Sæthre


// Spørsmål 2
console.log("Exercise 2");
//Make a new variable x with the numeric value of 19. Make a new variable y with the numeric value of 23.
//Add x and y into another variable named answer.
//Console log out the value of answer.
var x = 19;
var y = 23;
var answer = x + y;
console.log(answer); //42


// Spørsmål 3
console.log("Exercise 3");
//Make a new variable named myBool without assigning it a value.
//Console log out the value of myBool. What result do you expect it to have?
//Assign the value true to myBool.
//Again, console log out the value of myBool. What result did you expect it to have now?
//What is the result of the following, and why:
var myBool;
console.log(myBool); //undefined
myBool = true;
console.log(myBool); //true
console.log(!myBool); //false fordi det er en ! som ødelegger


// Spørsmål 4
console.log("Exercise 4");
//Make a new apropriately named variable with the string "Blåbærsyltetøy".
//Console log out the number of characters in that string.
var myText = "Blåbærsyltetøy";
console.log(myText.length); //14


// Spørsmål 5
console.log("Exercise 5");
//Make a variable a with the string value "19", and a variable b with the numeric value 23.
//Console log out (a + b). What result do you get?
//Without changing a or b, what do you need to do to get the result to be 42?
var a = "19";
var b = 23;
console.log(a + b); //1923
console.log(Number(a) + b); //42


// Spørsmål 6
console.log("Exercise 6");
//Make the variables x = 19, y = 23, and z = 10.
//Console log out (x + y * z). Did you get the result you expected?
//How must you place parenthesis in the expression (x + y * z) to get the result 420, instead?
var x = 19, y = 23, z = 10;
console.log(x + y * z); //249
console.log((x + y) * z); //420


// Spørsmål 7
console.log("Exercise 7");
//Console log out the reminder you get when dividing 7 by 3.
console.log(7 % 3); //1





console.log("TASKS MODULE 1.3")
// Spørsmål 1
console.log("Exercise 1");
//- Make a variable myNumber with a number value of 10.
var myNumber = 10;
// a) Make an if statement to see if the value of myNumber is equal to 10.
if (myNumber === 10) {
    console.log ("Bingo, the number is 10");
}
// b) Add an else statement that console logs out "Aww, the number wasn't 10". What is console logged out now?
//c) Change myNumber to something other than 10. What is console logged out now?
myNumber = 12; // For C
if (myNumber === 10) {
    console.log ("Bingo, the number is 10");
} else {
    console.log ("Aww, the number wasn't 10");
}



// Spørsmål 2
console.log("Exercise 2");
//Make a (boolean) variable named apple valued true and another variable named orange valued false.
var apple = true;
var orange = false;
//a) Make an if statement that compares the two and console logs out 
//"You cannot compare apples and oranges" as long as the two variables are not equal.
if (apple !== orange) {
    console.log("You cannot compare apples and oranges");
}
//b) Add an else statement that console logs out "Hm, it seems apples and oranges are the same, after all".
//c) Change the orange variable's value to true. What is console logged out?
//d) Then change the apple variable's value to false. Now, what is console logged out?
orange = true; //c
// apple = false; //d
if (apple !== orange) {
    console.log("You cannot compare apples and oranges");
} else {
    console.log("Hm, it seems apples and oranges are the same, after all");
}


// Spørsmål 3
console.log("Exercise 3");
//Ask the user to input their name.
//If the name is set display a message saying "Hello, [name]".
//If nothing was entered display a message saying "Awww!"
//Tip: Use prompt() to allow input
let inputName = prompt("What is your name?");
if (inputName !== "") {
    alert ("Hello, " + inputName);
} else {
    alert ("Aww!");
}
//What happens if the user presses "Cancel"?
//Cancel gives "Hello, null"


// Spørsmål 4
console.log("Exercise 4");
//Make a variable myAge and give it a numeric value (eg. your age).
//Make an if...else if...else statement that console logs out the following scenarios:
//If myAge is less than 0, it says "That's not possible".
//If myAge is less than 18, it says "You are juvenile".
//If myAge is less than 30, it says "You are still young".
//If myAge is less than 50, it says "You aren't exactly young anymore, are you?"
//If myAge is less than 70, it says "You're getting really old, aren't you?"
//If myAge is less than 100, it says "How is retirement treating you?"
//If myAge is 100 or more, it says "Centennial? Impressive...";
var myAge = 50;
if (myAge < 0 || isNaN(Number(myAge))) { //ekstra sjekk
//if (myAge < 0) {
    console.log("That's not possible")
} else if (myAge < 18) {
    console.log("You are juvenile");
} else if (myAge < 30) {
    console.log("You are still young");
} else if (myAge < 50) {
    console.log("You aren't exactly young anymore, are you?");
} else if (myAge < 70) {
    console.log("You're getting really old, aren't you?");
} else if (myAge < 100) {
    console.log("How is retirement treating you?");
} else {
    console.log("Centennial? Impressive...")
}


// Spørsmål 5
console.log("Exercise 5");
//Ask the user input a number.
//Check to see if it was really a number that was entered.
//Display "Valid number entered" or "Not a valid number entered" back to the user.
//Tip: Check the input using the Number() function and the isNaN() function.
var number = prompt("Please, enter a number");
var test = Number(number);
if (isNaN(test)) {
    console.log (number + " is not a number: Not a valid number entered");
} else {
    console.log (number + " is indeed a number: Valid number entered");
}


// Spørsmål 6
console.log("Exercise 6");
//Ask the user input a number.
//Display the number and whether it is odd or even, back to the user.
var number = prompt("Please, enter a number");
if (number % 2 == 0) {
    console.log (number + " is an even number");
} else {
    console.log (number + " is an odd number");
}


// Spørsmål 7
console.log("Exercise 7");
//Extend the code from Exercise 3, to check if nothing was entered or the user just pressed cancel.
let name = prompt("What is your name?");
if (name ==="" || name === null) {
    alert ("Aww!");
} else {
    alert ("Hello, " + name);
}


// Spørsmål 8
console.log("Exercise 8");
//Make a variable fruit and give it the value "pear", and an undefined variable named output.
//Make a switch statement that uses fruit as it's expression and the following cases:
//apple: give output the value "An apple a day..."
//orange: give output the value "What to do with all the orange peel?"
//pear: give output the value "Delicious, from a tree or a can."
//banana: give output the value "What, are you a Minion?"
//mango: give output the value "Mangos are weird..."
//a) Console log out the output variable. What is console logged out?
//b) Make a default case that gives output the value "That's not a fruit, at least not one I've heard of."
//c) Change the original fruit variable to the value "kiwi". What is console logged out now?
var fruit = "kiwi";
var output;
switch (fruit) {
    case "apple":
        output = "An apple a day...";
        break;
    case "orange":
        output = "What to do with all the orange peel?";
        break;
    case "pear":
        output = "Delicious, from a tree or a can.";
        break;
    case "banana":
        output = "What, are you a Minion?";
        break;
    case "mango":
        output = "Mangos are weird...";
        break;
    default:
        output = "That's not a fruit, at least not one I've heard of.";
}
console.log(output);


// Spørsmål 9
console.log("Exercise 9");
//a) Make a switch statement that takes the input and console logs out one of the following.
//If the input is December, January or February, then console log: "It's Winter!".
//If it's March, April or May, then log out "It's Spring!".
//If it's June, July or August, then log out "It's Summer!".
//If it's September, October or November, then log out "It's Autumn!".
//b) Make a default case that logs out "That's not a month...". Now, enter "may" - and not "May" as input; what is logged out?
//c) Make sure that the input no longer is case sensetive; so as an example it doesn't 
//matter if the input is "May" or "may", it displays "It's Spring!" either way.
let month = prompt("Enter a month: ");
month = month.toLowerCase();
switch (month) {
    case "december":
    case "january":
    case "february":
        console.log("It's Winter!"); 
    break;
    case "march":
    case "april":
    case "may":
        console.log("It's Spring!"); 
    break; 
    case "june":
    case "july":
    case "august":
        console.log("It's Summer!"); 
    break;  
    case "september":
    case "october":
    case "november":
        console.log("It's Autumn!"); 
    break;
    default:
        console.log("That's not a month...");
}


// Spørsmål 10
console.log("Exercise 10");
//Ask the user to input a number representing the voltage needed for an appliance (typical 1.5, 6, 12, 24, 110, 230, 480, etc).
//If the number is between 220 and 240, then display an alert saying "This can run on the usual grid".
//If not display "This need an inverter or something".
let chosenVoltage = prompt("What voltage does your appliance need?");
chosenVoltage = parseInt(chosenVoltage); // Convert mixed answer to number

if (isNaN(chosenVoltage)) {
    //chosenVoltage still isn't a number after conversion
    alert("You need to input a number");
} else {
    //chosenVoltage is a number after conversion
    if(chosenVoltage >= 220 && chosenVoltage <= 240) {
        alert ("This can run on the usual grid");
    } else {
        //chosenVoltage is NOT between 220 and 240
        alert ("This need an inverter or something");
    }
}




console.log("TASKS MODULE 1.4")
// Spørsmål 1
console.log("Exercise 1");
//a) Make a for loop counting from 0 through 10 (including the 10). Console log out the numbers.
//b) Make a for loop counting from 6 through 11 (including the 11). Console log out the numbers.
//c) Make a for loop counting from 10 through 1 (including the 1). Console log out the numbers.


// Spørsmål 2
console.log("Exercise 2");
//a) Make a while loop counting from 0 through 10 (including the 10). Console log out the numbers.
//b) Make a while loop counting from 6 through 11 (including the 11). Console log out the numbers.
//c) Make a while loop counting from 10 through 1 (including the 1). Console log out the numbers.


// Spørsmål 3
console.log("Exercise 3");
//a) Make a for loop counting from 1 through 10. Console log out the numbers, except for 5 (let the loop skip over 5).
//b) Make a while loop counting down from 10 through 0, but stops after 2 is reached. Console log out the numbers (10-2).


// Spørsmål 4
console.log("Exercise 4");
//a) Make a do...while loop counting down from 10 through 5. Console log out the numbers.
//b) What becomes the output if you set the counter to 0 before the loop?


// Spørsmål 5
console.log("Exercise 5");
//Make a for loop that counts just the even numbers (0, 2, 4, 6, ...) from 0 through 20. Console log out the numbers.


// Spørsmål 6
console.log("Exercise 6");
//Use a for...of loop and console log out the diffent cats with the same lead text for each breed.
const catBreeds = ["Abyssinian", "Balinese", "Birman", "Chartreux", "Egyptian Mau", "Maine Coon", "Norwegian Forest Cat", "Ragdoll", "Siamese", "Siberian"];



// Spørsmål 7 - Level 2
console.log("Exercise 7 - Level 2");
//Using a double loop, make the following pattern:
//*
//**
//***
//****
//*****


// Spørsmål 8 - Level 2
console.log("Exercise 8 - Level 2");
//Fizz buzz is a group word game for children to teach them about division. 
//Players take turns to count incrementally, replacing any number divisible by 
//three with the word "fizz", and any number divisible by five with the word "buzz".

//Players generally sit in a circle. The player designated to go first says the number "1", 
//and the players then count upwards in turn. However, any number divisible by three is 
//replaced by the word fizz and any number divisible by five by the word buzz. 
//Numbers divisible by 15 become fizz buzz.
//a) Using a for loop, make a variant of Fizz buzz where you count from 1 through 20 
//and add each number to a text string as you count. In the end console log out the answer string.

//b) Make a variant where you count from 1 through 30, and buzz is used for numbers divisible by 7 (not 5).