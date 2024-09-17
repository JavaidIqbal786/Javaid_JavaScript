// ARRAYS IN JAVASCRIPT

let marks = [97, 85, 78, 63, 92]
console.log(marks);
let heros = ["ironman", "hulk", "thor", "superman", "spiderman", "batman"]
//console.log(heros);
console.log(typeof marks); // Data type of Arrays is object
 
// note: Arrays are mutable

// looping over arrays

// for loop

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
    
}

// for of loop

let cities = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Rawalpindi"]
for (const city of cities) {
    console.log(city.toUpperCase());
    
}


let sum = 0;
for (const i of marks) {
    sum = sum + i;
}
console.log(`Sum = ${sum}`);
let avg = sum / marks.length
console.log(`Averge marks = ${avg}`);
