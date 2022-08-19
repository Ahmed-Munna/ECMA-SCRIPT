    // const arr = ["munna", "Besu", "Bokacoda"];
    // // console.log(arr[arr.length-1]);

    // // for(i = 0; i<=arr.length-1; i++){
    // //     console.log(arr[i]);
    // // }
    // arr.push("Abal Dabu");

    // function myFunction(value){
    //     console.log(value);
    // }

    // arr.forEach(myFunction);
    
 // array method

    //  const arr = [
    //     "Bangladesh",
    //     "Rasia",
    //     "Southi Arabia",
    //     "Palestain"
    // ];
    // const uro = [
    //     "Ingland",
    //     "oustralia",
    //     "Ukrin"
    // ];

    // console.log(arr.toString());
    // console.log(arr.join(" "));
    // console.log(arr.pop());
    // console.log(arr);
    // arr.push("Iran");
    // console.log(arr);
    // const conuntry = arr.shift();
    // console.log(arr);
    // arr.unshift("Lebanon");
    // console.log(arr);

    // arr.splice(1,0,"Malayshia","Baharian");
    // console.log(arr);

    // const sum = arr.concat(uro);
    // console.log(sum);

    // const conuntry = [
    //     "Dubai",
    //     "England",
    //     "Australia",
    //     "Canada",
    //     "France",
    //     "Bangladesh",
    //     "Garman",
    //     "Italy",
    //     "Jordan"
    // ];
    // const num = [30,1,4,70,20,20,55,82,69,96,0];

    // conuntry.sort();
    // console.log(conuntry);
    // conuntry.reverse();
    // console.log(conuntry);
    // num.sort();

    // when we will do sorting in numarical value

    // num.sort(function(a, b){
    //     return a - b;
    // });
    // console.log(num);
    
    // num.sort(function(a, b){
    //     return b - a;
    // });

    // console.log(num);

    const numbers = [45, 4, 9, 16,25];

    // function myFunction(value, index, array){
    //     console.log(value);
    //     console.log(index);
    //     console.log(array);
    // }
    // numbers.forEach(myFunction);

    // function myFunction(value){
    //     console.log(value * 2);
    // }
    // numbers.map(myFunction);

    // function myFunction(value){
    //     return value > 10;
    // }

    // const newNum = numbers.filter(myFunction);

    // console.log(newNum);

    function myFunction(total, value, index, array){
        return total + value;
    }

    const newNum = numbers.reduce(myFunction, 10);
    console.log(newNum);

