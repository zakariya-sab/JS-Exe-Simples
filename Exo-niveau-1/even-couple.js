/*
6 *** Even Couple ***
Define a function, evenCouple, that accepts an array of
numbers as an argument.
evenCouple should return a new array with the first two
even numbers from the original array:
evenCouple([1, 2, 3, 4, 5, 6]); // => [2, 4]

If fewer than two even numbers exist in the original array,
return an empty array or an array with the only even number:
Example:
--------
evenCouple([13, 15, 20]); // => [20]
evenCouple(1, 3, 5, 7); // => []
*/

function evenCouple(arr) {
    let size = arr.length;
    let a = 0;
    let cp = 0;
    let index = [];
    while (a != 2 && cp != size) {
        if (arr[cp] % 2 == 0) { index[a] = arr[cp]; a++; cp++; }
        else { cp++ }
    }
    return index;
}
console.log(evenCouple([1, 2, 3, 4, 5, 6]));
