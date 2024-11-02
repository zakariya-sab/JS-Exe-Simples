/*
5 *** Only Odds ***
Define a function, onlyOdds, that accepts a number as an argument.
onlyOdds should return the sum of all the odd numbers
between the given number and 1.
If onlyOdds receives an argument less than 1, it should return 0.
Example:
--------
onlyOdds(6); // => 9 (5 + 3 + 1)
*/

function onlyOdds(num) {
    let i = 0;
    let cp = 0;
    for (i = 1; i <= num; i += 2) {
        cp = cp + i;
    }
    return cp;
}
console.log(onlyOdds(6));
console.log(onlyOdds(7));
