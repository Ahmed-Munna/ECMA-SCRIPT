// const sentence = `Learn with Sumit is all about teaching web 
// development skills and techniqes in an efficient and practical manner. 
// If you are just getting started in web development, Learn with sumit has
// all the tools you need to learn thenewest and most popular technologies
// to convert you from a no stack to full stack developer. Learn with sumit
// also deep dives into advanced topics using the latest best practices 
// for you seasoned web developers.`;

// const match = sentence.match(/sumit/ig);
// const occurances = match ? match.length : 0;

// console.log(occurances);

// let position = sentence.search(/sumit/i);
// position = position>= 0 ? position : "Noto found";

// console.log(position);



//=========================


// function linearSearch(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === val) {
//             return i;
//         }
//     }
//     return "not found";
// }

// console.log(linearSearch(['a', 'b', 'c', 'd'], 'd'));


//==========================================


function longestString(names) {
    let longestWord = '';

    for(name of names) {
        if(name.length > longestWord.length) {
            longestWord = name;
        }
    }

    return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['munna', 'dabashis', 'Biswas']));




