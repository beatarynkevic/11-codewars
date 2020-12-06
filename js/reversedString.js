// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// 1. Way
function solution(str) {
    return str.split('').reverse().join('');
} // vietoj str.split('') gali buti [...str]

console.log(solution('world'));

//   https://dev.to/valec/4-different-ways-to-reverse-a-string-with-javascript-34cl
//2. The old fashioned way: the for loop

let myString = 'holla amigo!';

function reverse(myString) {
    let reversedString = '';
    for (let char of myString) {
        reversedString = char + reversedString;
    }
    return reversedString;
}

console.log(reverse(myString));