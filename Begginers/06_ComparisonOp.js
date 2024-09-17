// Comparison Operators

let a = 4;
let b = 6;

console.log("a == b", a==b); // Checks Equality Expected Output false
console.log("a != b", a!=b); // Checks Not Equal Expected Output true
console.log("a < b", a<b); // Checks less than Expected Output true
console.log("a > b", a>b); // Checks Greater than Expected Output false
console.log("a <= b", a<=b);  // true
console.log("a >= b", a>=b);   // false

let x = 5;
let y = "5";

console.log("x == y", x==y);// true
console.log("x === y", x===y);// false because '===' strickly compares so string "5" and number 5 are not equal
console.log("x !== y", x!==y);// true