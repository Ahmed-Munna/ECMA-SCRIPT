// LUDO problem 1

    function Ludo(){
        return Math.floor(Math.random()*6)+1;
    }

    console.log(Ludo());

// serializ Class all student name whith alfabetically


    const student = [
        "Rahim",
        "Dabashis",
        "Biswas",
        "Shovon",
        "Munna",
        "Mahin"
    ];

    student.sort();
    console.log(student);


// serialize neumarical value 


    const num = [4,3,2,5,6,8,1,7,0,9];
    num.sort(function(a, b){
        return a-b;
    });

    console.log(num);

// lipyear

    function isLeapYear(year){
        if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
            console.log("YES " + year + " is Leap Year.");
        }else{
            console.log("NO " + year + " is Not Leap Year");
        }
    }
    isLeapYear(2025);

// has vowel

    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    function hasVowel(sentence){
        let count = 0;
        const letter = Array.from(sentence);

        letter.forEach(function(value){
            if(vowel.includes(value)){
                count++;
            }
        });
        return count;
    }

    console.log(hasVowel("I love Bangladesh"));


