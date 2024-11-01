"use strict";

// function str(word) {
//     return word.slice(0, word.length -1);
// }

// console.log(str(javascript));

// function containsJavaScript(str) {
//     return str.indexOf('JavaScript') !== -1;
// }

// console.log(containsJavaScript("I love JavaScript"));
// console.log("I love coding");

// function extraWorld(str, word) {
//     let res = str.indexOf(word);
//     if(res === -1) {
//         return str
//     }
// }
// console.log(extraWorld("hello world"));

// ----1----
// function capitalize(word) {
//   if (!word) return word; 
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }
// console.log(capitalize("javascript"));
// console.log(capitalize("HELLO"));

// ----2----
// function capitalize(word) {
//     let newWord = word.slice(0, - 1);
//     return newWord;
// }
// console.log(capitalize("javascript"));
// console.log(capitalize("HELLO"));

// ----4----
// function extractWorld(str, kesiladiganSoz) {

// }
//     console.log(extractWorld("Salom dunyo", "Salom"));

// ----5----
// function trimString(str) {
//     let newStr = str.trim();
//     return newStr;
//     }
//     console.log(trimString(" hello world "));
//     console.log(trimString(" JavaScript "));

// ----6----


// const person = {
//     name: "Ali",
//     age: 30,
//     hobi: {
//         music: 'rap',
//         sports: 'football'
//     }
// };

// for(let key in person) {
//     console.log(`Property is ${key}, value ${person[key]}`);
// } if(let hobi = Hobi) {
//     console.log(`Hobi is ${hobi}`);
// }

let numberOfBooks = prompt("Nechta kitob o'qidingiz?");

let booksDB = {
    count: numberOfBooks || 0,
    books: {},
    authors: {},
    genres: [],
    isPublic: true
};

for (let i = 0; i < booksDB.count; i++) {
    let bookName = prompt("Oxirgi o'qigan kitobingiz?");
    let rating = prompt("Necha ball berasiz?");
    
    if (bookName && rating) {
        booksDB.books[bookName] = rating;
    }
}

if (booksDB.count > 0) {
    console.log("Foydalanuvchi kitobxon:");
} else {
    console.log("Foydalanuvchi hali kitob o'qimagan.");
}