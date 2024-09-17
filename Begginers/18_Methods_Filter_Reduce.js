/* Filter: Creates a new array of elements that give true for a condition/filter.
    It filters out the array based on condition */

let arr = [1,2,3,4,5,6,7,8,9,10]
let evens = arr.filter ((val)=>{
    return val % 2 == 0;
});
console.log(evens);

// Reduce: Performs some operations and reduce the array to a single value
// Sum of elements of an array
const sum = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log(`Sum of array elements is: ${sum}`); // output = 55

// Return largest number from an array

let numbers = [80, 50, 60, 35, 100, 12]
const largestNumber = numbers.reduce ((prev,curr) =>{
    return prev > curr ? prev : curr
    //      OR
    // if (prev > curr) {     
    //     return prev;
    // }else{
    //     return curr;
    // }
});
console.log(`largestNumber is: ${largestNumber}`);

// return smallest number from an array

const smallestNumber = numbers.reduce ((prev,curr) =>{
    return prev < curr ? prev : curr
});
console.log(`smallestNumber is: ${smallestNumber}`);

// print marks of students that score 90+

let marks = [80, 75, 92, 89, 99]
const toppers = marks.filter ((scores)=>{
    return scores >= 90;
});
console.log(`toppers: ${toppers}`);

/* Take a number num as input from the user. Create an array of numbers from 1 to n
Also calculate sum and product of all numbers of an array using reduce method*/

let num = 5;
let numsArray = [];
for (let i = 1; i <= num; i++) {
    numsArray[i-1] = i;
}
console.log(numsArray);
let sumofArray = numsArray.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(`Sum of all numbers in array is: ${sumofArray}`);

let productofArray = numsArray.reduce((prev,curr)=>{
    return prev * curr;
});
console.log(`Product of all numbers in array is: ${productofArray}`);

