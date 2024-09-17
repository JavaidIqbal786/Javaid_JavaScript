class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log("website data");
        
    }
}

class Admin extends User{
    constructor (name, email) {
        super(name,email);
    }
    editdata(){
        console.log("Edit data on website");
        
    }
}

let student1 = new User("Javaid", "Javaid@email.com");
let student2 = new User("shahzad", "shahzad@email.com");
let teacher1 = new User("sirImran", "sirimran@college.com");
let admin1 = new Admin("admin", "admin123@college.com");
