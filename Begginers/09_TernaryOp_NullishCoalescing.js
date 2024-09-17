//  TERNARY OPERATOR

let age = 25;
//          codition        true                fale
let result = age >= 18 ? "You Can Vote" : "You Cannot Vote"
console.log(result);



// Nullish coalescing operator (??): null undefined

let a = 5 ?? 10
let b = null ?? 20
let c = undefined ?? 30
let d = null ?? 40 ?? 50
console.log(a); // 5
console.log(b); // 20
console.log(c); //30
console.log(d); // 40
