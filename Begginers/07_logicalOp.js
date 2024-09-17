// LOGICAL OPERATORS (AND && , OR || , NOT !)

let a = 5;
let b = 8;

console.log(a == b && b > a); // false
console.log(a == b || b > a); // true
console.log(!(a == b || b > a)); // false
console.log(!(a == b && b > a)); // true
console.log(!(a == b )); // true

console.log(a <= b && b > a && a == 5); // true
console.log(a == b || b > a || a == 6); // true

/*
AND --> Checks if all Conditions are true
OR --> Checks if one Condition is true
NOT --> Reverse the result
*/