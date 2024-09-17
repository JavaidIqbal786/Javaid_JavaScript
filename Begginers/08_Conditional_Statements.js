// CONDITIONAL STATEMENTS

// IF STATEMENT

let a = 5;
let b = 9;
if(a<=b){
    console.log("true");
    
}

// IF-ELSE STATEMENT

let mode = "dark-mode";
let color;
if(mode === "dark-mode"){
    color = "black";
    
} else {
    color = "white";
}
console.log(color);

// IF-ELSE-IF STATEMENT

let marks = 75;
if(marks >= 80){
    console.log("A Grade");   
} else if (marks >= 70){
    console.log("B Grade");
} else if (marks >= 60){
    console.log("C Grade");
} else if (marks >= 50){
    console.log("D Grade");
} else if (marks >= 40){
    console.log("E Grade");
} else {
    console.log("Fail");
    
}



/* false values:
    false, 0, -0, BigInt 0n, "", null, undefined, NaN 
    true values:
    'false', "0", " ", [], {}, function(){}
    false == 0, false == "", 0 == ""*/
