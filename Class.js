//creating a object

const Student = {
    fullNamae: "sharadha khapra",
    marks: 94.4,
    printmarks: function () {
        console.log(this.marks)
    },
};


const Student2 = {
    salary: 5550,
}

Student2.__proto__ = Student;//passing Student as a prototype in Student2;


// classes

class ToyotaCar {

    constructor() {  // constuctor is called by the constructor name in js
        console.log("constructor is called");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar();  // creating a object of fortuner car
