let DATA = "secret Information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email
    }
    viewdata(){
        console.log("website data is ")
    }
}

let obj = new user("chaitanya","chaitanya@gmail.com");

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA = "some new value";
    }
}

let admin1 = new admin("admin1","admin1@gmail.com");