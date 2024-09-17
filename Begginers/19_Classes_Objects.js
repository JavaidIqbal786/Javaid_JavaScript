// Objects

const student = {
    stdName: "Malik Javaid",
    marks : 92,
    printmarks :  function () {
        console.log(this.marks);    // Here this keyword means student.marks
    }
}
//console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));




// JS Objects have a special property called prototype (contains different properties and methods)

const employee = {
    calTax() {
        console.log("Tax rate is 10%");
        
    }
}

const newEmp = {
    salary : 50000,
}
newEmp.__proto__ = employee;
//console.log(newEmp.calTax());



// Combining two Objects

const obj1 = {
    a : 1,
    b : 2,
}
const obj2 = {
    c : 3,
    d : 4,
}
//const combine = Object.assign({}, obj1, obj2)
const combine = {...obj1, ...obj2} // spread
console.log(combine);



// Classes

class car {
    start(){
        console.log("start");
        
    }
    stop(){
        console.log("stop");
        
    }
    setbrand (brand){
        this.brandName = brand;
    }
}
let fortuner = new car();
fortuner.setbrand("fortuner");
let ferari = new car();
ferari.setbrand("ferari");


// Inheritance in JS

class person {
    eat(){
        console.log("eat");
        
    }
    sleep(){
        console.log("sleep");
        
    }
}
class engineer extends person{
    work(){
        console.log("Solves Problems");
        
    }
}
class doctor extends person{
    work(){
        console.log("Treat Patients");
        super.eat();
        // super keyword is used to access parent's properties and methods
    }
}
let engineerAli = new engineer();
let drEhsan = new doctor();

