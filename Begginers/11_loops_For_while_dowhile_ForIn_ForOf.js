// FOR, WHILE AND DO-WHILE LOOP

console.log("FOR LOOP");
for (let i = 1; i <= 5; i++) {
    console.log(i);
    
}

console.log("WHILE LOOP");
let j = 6;               
while (j<=10) {
    console.log(j);
    j++;
}

console.log("DO WHILE LOOP");
let k = 11;
do {
    console.log(k);
    k++;
} while (k<=15)


console.log("FOR-OF LOOP"); // For-of loops used for strings
let str = "Malik"
for (let i of str) {
    console.log(i);
    
}

console.log("FOR-IN LOOP");     // For-in loops used on objects 
let student = {
    stdId : 1001,
    stdname : "Javaid Iqbal",
    stdAge : 20,
    isPass : true
}
for (let key in student) {
    console.log("key = ", key, "Value = ", student[key]);
}