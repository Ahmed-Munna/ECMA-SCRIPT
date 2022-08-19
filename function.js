 // function
        
        
        // self invoking function
        
        
        // (function (){
        //     console.log("Hello Bangladesh");
        // })()
        
        // arrow function
        
        // const x = (a, b) => {
        //     if(a>b){
        //         console.log("A is better then B");
        //     }else{
        //         console.log("B is better then A");
        //     }
        // }
        
        // x(1,3);
        
        
        // call
        
        // const person = {
        //     fullName: function(city, country) {
        //         return this.fastName + " " + this.lastName + " " + city + " " + country;
        //     }
        // }
        
        // const perOne = {
        //     fastName: "Ahmed",
        //     lastName: "Munna"
        // }
        
        // console.log(person.fullName.call(perOne, "Dhaka", "Bangladesh"));
        
        // apply
        
        const person = {
            fullName: function(city, country) {
                return this.fastName + " " + this.lastName + " " + city + " " + country;
            }
        }
        
        const perOne = {
            fastName: "Ahmed",
            lastName: "Munna"
        }
        
        console.log(person.fullName.apply(perOne, ["Dhaka", "Bangladesh"]));       
        
        
        
        const ap = Math.max.apply(null,[1,2,4,5,6,7]);
        
        console.log(ap);
        
        
        // Closere
        
        function fastFunction() {
            let num = 0;
            return function() { num += 1; }
        }
        const newFunction = fastFunction();
        console.dir(fastFunction);
        newFunction();
        newFunction();
        

        
        
        

