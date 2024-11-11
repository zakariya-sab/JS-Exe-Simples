/*
3 *** Last Character ***
 Define a function lastCharacter that accepts two strings as
arguments.
 lastCharacter should return true if both strings end with the
 same character. Otherwise, lastCharacter should return false.
 Example:
 --------
 lastCharacter('apples', 'pumpkins'); // => true
 lastCharacter('marker', 'pen'); // => false
*/

function LastCharacter(st1, st2) {
    let ss = st1[st1.length - 1];
    let rr = st2[st2.length - 1];
    if (ss == rr)
        return true;
    else { return false; }

}