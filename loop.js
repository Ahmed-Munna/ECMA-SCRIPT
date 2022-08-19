// for in loop (it use in object. dont use in a array)

const person = {
    fname: "Ahmed",
    lname: "Munna",
    age  : 19,
    hobby: "Smoking Ganja"
};
for(let x in person){
    console.log( x + "  => " + person[x]);
}

// for of loop (it use in array, string,)

const arr = [1,23,4,5,32,45,21,90];
for(let a of arr){
    console.log(a);
}

let str = "Bangladesh";
for(let s of str){
    console.log(s);
}





