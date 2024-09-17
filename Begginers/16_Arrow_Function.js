// Arrow functions

const sub = (x,y) => {
    console.log(x - y);
    
}
sub(10,6);



// Count vowels using Arrow function

let countvow = (str)  => {
    let count = 0;
    for (const char of str) {
       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
       }
        
    }
    console.log(`Vowel count: ${count}`);
}
countvow("pakistan zindabad")
