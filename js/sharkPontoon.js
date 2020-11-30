// https://www.codewars.com/kata/57e921d8b36340f1fd000059
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed * (dolphin ? 2 : 1) ? 'Alive!' : 'Shark Bate!';
}

console.log(shark(12, 50, 4, 8, true), "Alive!");
console.log(shark(7, 55, 4, 16, true), "Alive!");
console.log(shark(24, 0, 4, 8, true), "Shark Bate!");