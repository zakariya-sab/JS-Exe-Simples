/*
1- *** Compare Objects ***
Define a function, compareObjects, that accepts two objects as
arguments.
compareObjects should return true if both objects have exactly the same
key/value pairs. Otherwise, compareObjects should return false.
Assume the objects are not nested.
compareObjects({ name: "Yara" }, { name: "Yara" }) // -> true
compareObjects({ name: "Omar" }, { name: "Omar", age: 12 }) // -> false
*/

function Compare_Objects(object1,object2){
    let length_object1 = Object.keys(object1).length;
    let length_object2 = Object.keys(object2).length;

    if(length_object1 != length_object2)
    {
        return false ;
    }
   
    for(key in object1 ){
        let value1 = object1[key];
        let value2 = object2[key];
     if ( value1 != value2)
     {
        return false ; 
     }
    }
    return true ;

}

console.log (Compare_Objects({ name: "Omar" }, { name: "Omar", age: 12 }));