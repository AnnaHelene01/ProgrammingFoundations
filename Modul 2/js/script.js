console.log("PROGRAMMING FOUNDATIONS MODUL 2 QUESTIONS");
// MODULE 2.1
console.log("TASKS MODULE 2.1");
// Spørsmål 1
console.log("Exercise 1");
var a = "Down the freeway rolls a wayward beer can";
var up = a.toUpperCase();
console.log(up);
var b = "YOU SHOULDN'T HAVE TO SELL YOUR SOUL";
var low = b.toLowerCase();
console.log(low);


// Spørsmål 2
console.log("Exercise 2");
var text2 = "Blåbærsyltetøy";
let slice1 = text2.slice(3, 6);
console.log(slice1); // bær

let slice2 = text2.slice(-8);
console.log(slice2); // syltetøy

let slice3 = text2.slice(0, 3);
console.log(slice3); //blå


//Spørsmål 3
console.log("Exercise 3");
var text3 = "Blåbærsyltetøy";
//a
let myChar = text3[2];
console.log(myChar);
//b
let unicode1 = text3.charCodeAt(4);
let unicode2 = text3.charCodeAt(12);
let unicode3 = text3.charCodeAt(2);
console.log (unicode1, unicode2, unicode3); //230 248 229


// Spørsmål 4
console.log("Exercise 4");
let shout1 = "Shout, shout!";
let shout2 = "Let it all out.";

//a (string method)
let concated = shout1.concat(" ", shout2);
console.log(concated);
//b (template literal method)
let stringified = `${shout1} ${shout2}`;
console.log(stringified);


// Spørsmål 5
console.log("Exercise 5");
const songtext = `London calling to the faraway towns
Now war is declared and battle come down
London calling to the underworld
Come out of the cupboard, you boys and girls
London calling now don't look to us
Phony Beatlemania has beaten the dust
London calling see we ain't got no swing
'Cept for the ring of that truncheon thing.`;

const searchFor = "London calling";
let first = songtext.indexOf(searchFor);
let last = songtext.lastIndexOf(searchFor);

console.log("First occurance at index " + first); //0
console.log("Last occurance at index " + last); //229


//Spørsmål 6
console.log("Exercise 6");
let sum = 35;
  if(sum % 10 == 0){
      console.log("a");
  } else if (sum % 2 == 1) {
      if (sum % 5 == 0 && sum % 2 == 0){
          console.log("b");
      } else if (sum % 5 == 0){
          console.log("c");
      } else {
          console.log("d");
      }
  } else {
      console.log("e");
  }
  //sum = 35 gir output 'c'.
  //(sum % 2 == 1) og (sum % 2 == 0) kan ikke begge være true, men
  // vi kan ikke nå console.log("b")




  // MODUL 2.2 SPØRSMÅL
  console.log("Questions for 2.2");
  console.log("Exercise 1")
  const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  //a What is the value of the seventh Fibonacci number? Console log out the answer.
  console.log(fibonacci[6]); //the value is 8

  //b : Make a variable sum. Use a for loop to go over the array, 
  //and add up the value of the numbers. Console log out the sum.
  let summ = 0;
  for (let i = 0; i < fibonacci.length; i++) {
      summ += fibonacci[i];
  }
  console.log(summ); // sum = 88


  //Spørsmål 2
  console.log("Exercise2");
  let myNumbers = [13, -2, 18, 4, 42, 12, 9, -21, -3];
  //a: Console log out how many items the Array holds.
  console.log(myNumbers.length); //9

  //b: Remove the last item in the Array.
  myNumbers.pop(); 

  //c: Add the number 14 to the end of the Array.
  myNumbers.push(14);

  //d: Add the number 3 to the start of the Array.
  myNumbers.unshift(3);
  console.log(myNumbers); //Array 10: [3, 13, -2, 18, 4, 42, 12, 9, -21, 14]

  //e: Use a for loop to go over the Array and find the largest number.
  let max = -Infinity; //Ingenting er less then negative infinity.
  for (let num of myNumbers) {
      if (num > max) {
          max =num;
      }
  }
  console.log("The largest number is " + max); //Det største tallet er 42.


  //Spørsmål 3 
  console.log("Exercise 3");
  let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
  //a: Console log out how many items the Array holds.
  console.log(vegetables.length); //4

  //b: Add "Tomato" to the end of the Array.
  vegetables.push("Tomato");

  //c: Add "Cucumber" to the start of the Array.
  vegetables.unshift("Cucumber");
  console.log(vegetables); // Array 6 : ['Cucumber', 'Cabbage', 'Turnip', 'Radish', 'Carrot', 'Tomato']

  //d: Use a for loop to go over the Array, and for each item,
  // console log out the value of the item and how many letters 
  //it contains (eg. "Tomato contains 6 letters").
  for (let item of vegetables) {
      console.log(`${item} contains ${item.length} letters`);
  }
  console.log("Samme svar men annen kode:")
  //d, også riktig men annen kode:
  for (let i = 0; i < vegetables.length; i++) {
      let output = vegetables[i] + " contains " + vegetables[i].length + " letters";
      console.log(output);
  }


  //Spørsmål 4
  console.log("Exercise 4");
  let mixed = ['Dill', 42, true, , 13, "13", null];
  //a: Make a for loop to loop over all items and, for each item 
  //console log out the index, value and data type of the element.
  for (let i = 0; i < mixed.length; i++) {
      console.log(i + " contains " + mixed[i] + " with the datatype " + typeof mixed[i]);
  }

  //b: Add the string "Hello, World!" to the undefined element 
  //in the Array mixed, then console.log out mixed.
  mixed[3] = "Hello World!";
  console.log(mixed); // Array 7: ['Dill', 42, true, 'Hello World!', 13, '13', null]

  //c: Make another for loop and add up all the items in 
  //the Array that has a numeric data type. Console log the sum.
  let numericSum = 0;
  for (let item of mixed) {
      if (typeof item === 'number') {
          numericSum += item;
      }
  }
  console.log(numericSum); // 55


  //Spørsmål 5
  console.log("Exercise 5");
  let vegetables2 = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
  let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  //a: Merge the 2 Arrays into a new Array, greeneries.
  let greeneries = vegetables2.concat(fruits);

  //b: Sort the merged Array then console log it.
  greeneries.sort();
  console.log(greeneries); //Array 9 : ['Apple', 'Banana', 'Cabbage', 'Carrot', 'Lemon', 'Mango', 'Orange', 'Radish', 'Turnip']

  //c: Console log out the first element in the merged, then sorted Array.
  console.log(greeneries[0]); // Apple

  //d: Console log out the last element in the merged, then sorted Array.
  console.log(greeneries[greeneries.length - 1]); //Turnip

  //e: Sort the merged Array in reverse order.
  greeneries.reverse();
  console.log(greeneries);
  // resultat: ['Turnip', 'Radish', 'Orange', 'Mango', 'Lemon', 'Carrot', 'Cabbage', 'Banana', 'Apple']


  //Spørsmål 6 Level 2
  console.log("Exercise 6");
  let myNumbers2 = [13, -2, 18, 4, 42, 12, 9, -21, -3];
  //a: Sort myNumbers using the Array.sort() method from above. 
  //Console log the sorted Array. Did you get the result you expected?
  myNumbers2.sort();
  console.log(myNumbers2);
  //[-2, -21, -3, 12, 13, 18, 4, 42, 9] Arrayen er sortert alfabetisk

  //b : Use a compare function to sort the numbers by numeric value, rather then alphabetically.
  myNumbers2.sort(function(a, b){return a - b});
  console.log(myNumbers2);
  //[-21, -3, -2, 4, 9, 12, 13, 18, 42] Arrayen er sortert fra minst til størst.

  //c : Sort the numbers in reverse order, ie. largest first, by adjusting the compare function.
  myNumbers2.sort(function(a, b){return b - a});
  console.log(myNumbers2);
  //[42, 18, 13, 12, 9, 4, -2, -3, -21] Arrayen er sortert fra størst til minst.




  // SPØRSMÅL MODUL 2.3
  console.log("Questions for Modul 2.3 - Objects")
  console.log("Exercise 1")
  let myTV = { make: "Toshiba", model: "42XV555", resolution: "1080p" };
  //a :Using bracket notation, console log out the value of the property resolution.
  console.log(myTV['resolution']); //1080p

  //b :Console log out a string with the values of make and model concatinated 
  //(with a space between them). Use dot-notation to retrieve the two property values.
  let makeAndModel = myTV.make + " " + myTV.model;
  console.log(makeAndModel); //Toshiba 42XV555

  //c :Add the property year with the value 2008 to the Object.
  myTV.year = 2008;
  console.log(myTV); //{make: 'Toshiba', model: '42XV555', resolution: '1080p', year: 2008}

  //d :Console log out the data type of myTV.
  console.log(typeof myTV); //object

  //e :Declear another variable, newTV, of the same kind of Object, with the values LG, 65OLEDCX, 2160p, 2020.
  let newTV = { make: "LG", model: "65OLEDCX", resolution: "2160p", year: 2020 };

  //f :Use a for...in loop to list all the properties of newTV, on the form "value (key)".
  for (let prop in newTV) {
      console.log(newTV[prop] + " (" + prop + ")")
  } // LG (make)
    //65OLEDCX (model)
    //2160p (resolution)
    //2020 (year)

  //g :Add the two TV objects to an Array named tvs.
  let tvs = [myTV + newTV];
  console.log(tvs);

  //h :Use a for...of loop to list all (ie. both) Objects in the tvs Array, on the form: "LG 65OLEDCX (2020), 2160p".
  for (let tv of tvs) {
    console.log (tv.make + " " + tv.model + " (" + tv.year + ") " + tv.resolution);
    }
    


  console.log("Exercise 2 - Level 2")
  //a :Add two more TVs to the tvs Array from Exercise 1, with these values, using push() twice:
  //TCL, 55DP660, 2160p, 2018
  //Samsung, QE65Q950RBT, 4320p, 2019
  tvs.push( { make: "TCL", model: "55DP660", resolution: "2160p" , year: 2018 } );
  tvs.push( { make: "Samsung", model: "QE65Q950RBT", resolution: "4320p", year: 2019 } );
  console.log(tvs); 

  //b :Use the Array.sort() on tvs and list the result, using the same way as you did in 1h). What happens?
  tvs.sort();
  for (let tv of tvs) {
     console.log (tv.make + " " + tv.model + " (" + tv.year + ") " + tv.resolution);
  } // Ingenting skjer, sort() vet ikke hvordan man sammenligner objects

  //c :Make a compare function that sorts tvs based on the year value, 
  //listing the newest TVs first. Now list the sorted tvs Array (as in 1h and 2b).
  tvs.sort(function(a, b){return b.year - a.year})
  console.log ("Sorted list:");
  for (let tv of tvs) {
     console.log (tv.make + " " + tv.model + " (" + tv.year + ") " + tv.resolution);
}



//SPØRSMÅL MODUL 2.4
console.log("Questions for Modul 2.4 - Functions")
console.log("Exercise 1")
// Make a function, with an apropriate name, that given one parameter, 
//console logs out the value of that parameter plus some descriptive comment.
//Invoke the function with a string as its argument.


console.log("Exercise 2")
//a :Make a function, isItOdd() that given a numeric parameter, returns true if the number passed in is odd, and false if it's not.

//b :Invoke the function with a string as its argument. Console log the result.

//c :Expand the function to return NaN if the argument passed in is not a valid number.

//d :Invoke the function with a string as its argument. Console log the result.



console.log("Exercise 3")
//a :Make a function toFarenheit() that given one argument, the temperature in celsius, returns the corresponding temperature in farenheit.
//: Console.log out the corrsponding degrees in farenheit, for the following degrees in calsius -40, 0, 37 and 100.

//b :Make a function toCelsius() that given one argument, the temperature in farenheit, returns the corresponding temperature in celsius.
//Console.log out the corrsponding degrees in celsius, for the following degrees in farenheit -40, 32, 98.6 and 212.


console.log("Exercise 4")
//a :Make a function called writeToPage(), that takes one parameter, and writes that value of the parameter at 
//text inside the p#emptyParagraph element.
//Invoke the function with an appropriate argument.

//b :Extend the function from a to take a second parameter, element, use the value of that parameter to target any element with that name.
//Invole the new/extended function, with an appropriate first argument and "anotherParagraph" as the second argument.

//c :[Level 2] If the element given in b doesn't exist, make a console error, with the text: "The given element, " + element + ", doesn't exist."
//Invole the new/extended function, with an appropriate first argument and "whatever" as the second argument.


console.log("Exercise 5")
let programmingLanguages = [
    "Python",
    "JavaScript", 
    "Java", 
    "C#", 
    "C", 
    "C++", 
    "Go", 
    "R", 
    "Swift", 
    "PHP"
];
//Make a function listItems() that sorts the list programmingLanguages alfabetically, and list them in individual list items in the ol#myList element on the page.
//Press the button on the webpage to invoke the function.


console.log("Exercise 6")
//a :Based on toFarenheit(), make a new function toFarenheitPrecise(), that takes two arguments, the temperature in celsius, 
//and the precision (the numbers of decimal points), that returns a float with the required level of precision. 
//(Level 2: Make the default value for the precision 2)
//Console.log out the corrsponding degrees in farenheit, for the following degrees in calsius -40, 0, 37 and 100.


//b :Do the same based on toCelsius(), in a new toCelsiusPrecise() function.
//Console.log out the corrsponding degrees in celsius, for the following degrees in farenheit -40, 32, 98.6 and 212.
