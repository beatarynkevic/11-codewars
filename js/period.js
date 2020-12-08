// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript

function periodIsLate(last, today, cycleLength) {
    return (today - last) / 86400000 > cycleLength
}