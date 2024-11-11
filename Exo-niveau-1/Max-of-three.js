/*
2 *** Max of Three ***
 Write a function maxOfThree that accepts three number arguments.
 maxOfThree should return largest number of the three.
 Example:
 --------
 maxOfThree(5, 4, 10); // => 10
 maxOfThree(7, 7, 4); // => 7
*/
function maxOfThree(a, b, c) {
    if (a === b && b === c) { return "is equals" }
    if (b > a && b > c) { return b; }
    if (a > b && a > c) { return a; }
    if (c > b && c > a) { return c; }
}
console.log(maxOfThree(454, 989, 78798));
