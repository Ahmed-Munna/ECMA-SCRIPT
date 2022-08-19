// const person = {
//     name: " munna",
//     name2: " ahmed ",
//     age: 19
// };
// let text = '';

// for (let x in person) {
//     text += person[x];
// }

// delete person.age;

// console.log(person);

// console.log(text);
// person.some = "bangla";
// console.log(person);



// // ======== Constractor =============


// function Person(fname,lname,age) {
//     this.firstName = fname;
//     this.lastName  = lname;
//     this.age       = age;
//     this.fullName  = function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const monu = new Person("Ahmed","Munna",19);
// // const Daba = new Person("Dabashis","Roy",19);
// // const bisu = new Person("Jahid","Biswas",19);

// //prototype start

// Person.prototype.country = "Bangladesh";

// //prototype end

// console.log(monu.country);
// // console.log(Daba.fullName());
// // console.log(bisu.fullName());



// //============  Itarable

//     const number = [0,1,3,4,5];

//     const itarator = number[Symbol.iterator]();

//     console.log(itarator.next());
//     console.log(itarator.next());
//     console.log(itarator.next());
//     console.log(itarator.next());
//     console.log(itarator.next());
//     console.log(itarator.next());

    //  const myNmber = {};

    // myNmber[Symbol.iterator] = function() {
    //     let n = 0;
    //     let done = false;
    //     return {
    //         next(){
    //             n += 10;
    //             if (n == 100) {done = true};
    //             return {value:n, done:done}
    //         }
    //     }
    // }

    // for (let x of myNmber) {
    //     console.log(x);
    // }


//     // set

    // const letters = new Set(["a", "A", "B", "b", "C", "c", "D", "d"]);

    // const lettersItarators = letters.values();

    // for (let x of lettersItarators) {
    //     console.log(x);
    // }


//============== Object ===========



const car = {
    name:   "Fiat",
    model:  500,
    weight: "850kg",
    color:  "white",
    start: function(){
        console.log(this.name + " Car has started. ");
        this.drive();
    },
    drive: function(){
        console.log("Car is driving");
    },
};

console.log(JSON.stringify(car));


