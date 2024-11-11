/*
1 *** Greeting ***
 Define a function greeting that accepts an optional string
 argument called name. greeting should return a personalized
 string if the name is present.
 Example:
 --------
 greeting('Tala'); // => Hello Tala!
 greeting(); // => Hello!
*/
function greeting(name) {
    if (typeof name === "string") {
        return console.log("Hello" + " " + name + "!");
    }
    else { return console.log("Hello !"); }
}
let name = "zakariya ";
let noname = 12;
greeting(noname);
greeting(name);
