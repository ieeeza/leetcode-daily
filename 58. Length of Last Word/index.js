let s = "   fly me   to   the moon  ";
let words1 = [];
let word = "";
let wordLenght 

for (let char of s.trim()) {
    if (char !== " ") {
        word += char;
    } else if (word.length > 0) {
        words1.push(word);
        word = "";
    }
}

if (word.length > 0) words1.push(word);

for (let i = 0; i < words1.length; i++) {
    if (words1[i + 1] == undefined) {
        wordLenght = words1[i].length
    }
}  


// -----------

// let s = "   fly me   to   the moon  ";
// let answer = 0;
// let counter = 0;
// for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " ") {
//         if (answer > 0) {
//             return answer;
//         }
//         counter = 0;
//     } else {
//         counter++;
//         answer = counter;
//     }
// }
// console.log(answer);