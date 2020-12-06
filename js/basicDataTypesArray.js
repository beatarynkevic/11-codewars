// https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

function getLength(arr) {
    return arr.length;
}
console.log(getLength([1, 2, 3, 4]));

function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3, 4]));

function getLast(arr) {
    return arr[arr.length - 1];
}
console.log(getLast([1, 2, 3, 4]));

function pushElement(arr) {
    var el = 1;
    arr.push(el);
    return arr
}
console.log(pushElement([1, 2, 3, 4]));

function popElement(arr) {
    arr.pop()
    return arr
}
console.log(popElement([1, 2, 3, 4]));