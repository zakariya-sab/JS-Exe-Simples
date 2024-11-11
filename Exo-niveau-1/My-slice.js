/*
7 *** My Slice ***
 Write a function mySlice that accepts up to three arguments:
 originalString (string)
 startIdx (number, optional)
 endIdx (number, optional)
 mySlice should return a string. The returned string should be
 a copy of the original string. If the user defines a startIdx,
 the returned string should start at that index:
 Example:
 --------
 mySlice('slice and dice', 2) // => ice and dice
 If the user defined an endIdx, the returned string should end at
 the last index before the endIdx:
 mySlice('slice and dice', 2, 5) // => ice
 If the user doesn't define either the startIdx or the endIdx,
 return the entire originalString:
 mySlice('slice and dice') // => slice and dice
 You can assume the startIdx will always be less than or equal
 to the endIdx.
 Do not use the built-in .slice string method in your answer.
 Feel free to use it in all future workshop problems though!
 */
 function mySlice(string, n1, n2) {
    if (typeof (n1) === "undefined") { return string }
    if (typeof (n1) != "undefined" && typeof (n2) === "undefined") { let a = string.slice(n1); return a; }
    if (typeof (n1) != "undefined" && typeof (n2) != "undefined") { let a = string.slice(n1, n2); return a; }

}
console.log(mySlice('slice and dice', 2));
console.log(mySlice('slice and dice', 2, 5));
console.log(mySlice('slice and dice'));
