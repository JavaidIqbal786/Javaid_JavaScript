// Higher Order Functions/Methods (Takes another function as parameter or return a function as output)
// FOR EACH LOOP [Method]

let arr = [1,2,3,4,5]
// arr.forEach(function printvalue(val){  // value at each index
//         console.log(val);
        
// });

// CallBackFunction: A callBack is a function passed as an argument to another function
arr.forEach((val) => {      // val is CallBackFunction
    console.log(val);
    
});


// Print Square of each value using forEach loop

let nums = [2, 3, 4, 5, 6]
nums.forEach((num) => {
    console.log(num*num);
    
})


// map Method

let newnums = nums.map((val) => {
    return val * val;
});
console.log(nums);
console.log(newnums);

