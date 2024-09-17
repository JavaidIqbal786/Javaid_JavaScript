// Consept of pre and post Increment/Decrement

// Increment

let x = 3;
let y = x++;    // post increment
console.log("x = ", x, " y =", y); // Expected output x = 4, y = 3
let z = ++y; // pre increment
console.log("x = ", x, " y =", y, " z = ", z); // Expected output x = 4, y = 4, z = 4

// Decrement

let p = 8;
let q = p--;    // post Deccrement
console.log("p = ", p, " q =", q); // Expected output p = 7, q = 8
let r = --q; // pre Deccrement
console.log("p = ", p, " q =", q, " r = ", r); // Expected output p = 7, q = 47, r = 7
