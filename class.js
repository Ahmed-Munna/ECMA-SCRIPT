


// class Car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     run() {
//         console.log(`${this.name} is raising in ${this.year}`);
//     }
// }
// const car = new Car("BMW", 2017);
// console.log(car);
// car.run();


// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age  = age;
//     }
//     play(stutas){
//         console.log(`${this.name},s Cricket cariar is ${this.age} years and he is a ${stutas}`);
//     }
// }

// const per1 = new person("Shakib",15);
// const per2 = new person("Tamim",16);

// per1.play("All rounder");
// per2.play("Batsman");



class Car {
    constructor(brand) {
        this.Carname = brand;
    }
    present() {
        return "I have " + this.Carname;
    }
}
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.carModele = mod;
    }
    show () {
        return this.Carname + ",s is Model is " + this.carModele;
    }
}

const carDetails = new Model("BMW", 2007);

console.log(carDetails.show());



