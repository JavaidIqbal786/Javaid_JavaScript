// STRINGS

let str = "Javaid Iqbal";
/* const str1 = new String("Javaid");    // another way to declare string but its Data type will be object
 console.log(typeof str1);  */
console.log(str);
console.log(str.length); // length property returns the length of string
console.log(str[0]);    // returns String index value
console.log(str.indexOf("q")); //returns String index position

let item = "pen";
let price = 10
//console.log("The price of", item, "is",price, "rupees"); // This is bad practice so avoid it
let output = `The price of ${item} is ${price} rupees` // and prefer this syntax. Which is String interpolation
console.log(output);

// Escape Characters

console.log("Hello\nWorld");   // \n starts new line
console.log("Hello\tWorld");   // \t add a tab space

// String Methods in JS

let newstr = console.log(str.toUpperCase()); // Converts string into Upper Case
console.log(str);

/* Note: String Methods Don't change the actuall string it
changes the copy of string and returns a new string. Strings are immutable in Javascript*/


let alphabets = "                           abc                         ";
console.log(alphabets.trim());  // trim removes white spaces from satr and end of the string
console.log(str.slice(0,3));    // Slice returns the cut part of string. In slice the end valve is not included
let a = "20";
let b = "24"
let add = console.log(a.concat(b));     // concat combines strings
// add1 = a + b;       // + operator also combines two strings but this is wrong practice
// console.log(add1);
console.log(a.replace("20","2k"));  // replacing string
console.log(b.charAt(1));      // charAt checks a character at index value 
console.log(str.split(" "));    // split spreates the string based on some thing like i.e space( ) or dash(-)

