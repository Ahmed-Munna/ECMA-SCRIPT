// callback

// function display(some) {
//     console.log(some);
// }
// function calculator(num1, num2, callback) {
//     let sum = num1 + num2;

//     if (callback) callback(sum);

//     return sum;
// }
// calculator(5,5);


// function display(some) {
//     console.log(some);
// }
// function calculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     if (callback) callback(sum);
//     return sum;
// }
// calculator(4, 5, display);

// asyncronus


// setTimeout and setIntervel
// console.log("Line 1");
// setTimeout(function() {
//     console.log("Line 2");
// }, 2000);
// console.log("Line 3");
// console.log

const status = true;

const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(status) {
            resolve("Promising is successfull");
        }else{
            reject("Failed");
        }
    },2000);
});

promise
    .then(function(value) {
        console.log(value);
    })
    .catch(function(rvalue) {
        console.log(rvalue);
    });














