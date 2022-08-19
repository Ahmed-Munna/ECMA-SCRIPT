const person = {

    firstName: "Ahmed",
    lastName:  "Munna",
    fullName: function(){
        return "My Full Name Is: " + this.firstName +
        " " + this.lastName;
    }

 };

 console.log(person.fullName());

 const person2 = {

    fullName: function(){
        return "Full Name: " + this.firstName + " " + this.lastName;
    }

 }
console.log(person2.fullName.call(person));


