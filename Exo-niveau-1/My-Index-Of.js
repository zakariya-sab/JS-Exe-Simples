/*
8 *** My Index Of ***
 Define a function, myIndexOf, that accepts two arguments:
 - source (string)
 - searchValue (string)

 If the source contains the searchValue, return the index
 at which the searchValue starts.
 If the searchValue appears more than once in the source,
 return the index from the first occurrence of the searchValue.
 If the searchValue doesn't exist in the source, return -1.
 Do not use the built-in .indexOf string method in your answer.
 Feel free to use it in all future workshop problems though!
 Example:
 --------
 myIndexOf('hello', 'h'); // => 0
 myIndexOf('hello', 'e'); // => 1
 myIndexOf('hello', 'l'); // => 2
 myIndexOf('hello', 'l'); // => 2
 myIndexOf('hello', 'o'); // => 4
 myIndexOf('twice twice', 'ice'); => 2
 myIndexOf('happy string', 'sad'); => -1
*/

// use slice !!!!!! 
function myIndexOf(str1, str2) {
    let a = 1;
    let cp = -1;
    if (str2.length > 1) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] === str2[0]) {
                while (a != str2.length - 1) {
                    if (str2[a] === str1[i + a]) { ++a; cp = i; }
                    else { break; }
                }
                if (a === str2.length - 1) {
                    return cp;
                }
                else {
                    return -1;
                }
            }
        }
    }
    else {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] === str2) { return i; }
        }
        return -1;
    }
}
console.log(myIndexOf('happy string', 'sad'));
console.log(myIndexOf('twice twice', 'ice'));
console.log(myIndexOf('hello', 'e'));


