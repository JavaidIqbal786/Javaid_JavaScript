// Functions
function sum(a, b) {     //function parameters are local variables --> Block Scope
//    console.log(a + b);
    s = a +b;
    return  s;       // return keyword returns a single value it can b an array which contains multiple values
}
let val = sum(5,7); //function argument
console.log(val);

// When we define a function we take values as parameter and when we call a function we pass argument



// count vowels from string using function

function countvowels(str) {
    let count = 0;
    for (const char of str) {
       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
       }
        
    }
    console.log(`Vowel count: ${count}`);
}
countvowels("pakistan")




// returning multiple values as array

function calculate (...nums) {      // (...) rest operater returns multiple values
    return nums;
}
console.log(calculate(100, 200, 400, 600, 800));



// Imediatly Invoked Function Expressions (IIFE)

(function chai() {
    console.log("Tea was fantastic"); // This function executes imediatly
})();

// Note: We use IIFE to remove Global scope polution