/* 2- *** Attendance Check ***
Define a function, attendanceCheck, that accepts a day of the week
as a string.
Using the globally-defined classRoom array, attendanceCheck should
return a new array with only the names of the students present
on the inputted day of the week.
classCheck('Monday'); // => ['Rania', 'Sara']
classCheck('Wednesday'); // => ['Rania', 'Lina']
*/
let classRoom = [
    {
        Rania: [
            { Sunday: true },
            { Monday: true },
            { Tuesday: true },
            { Wednesday: true },
            { Thursday: true },
        ],
    },
    {
        Lina: [
            { Sunday: true },
            { Monday: false },
            { Tuesday: false },
            { Wednesday: true },
            { Thursday: false },
        ],
    },
    {
        Sara: [
            { Sunday: false },
            { Monday: true },
            { Tuesday: true },
            { Wednesday: false },
            { Thursday: true },
        ],
    },
    {
        Amira: [
            { Sunday: true },
            { Monday: false },
            { Tuesday: false },
            { Wednesday: false },
            { Thursday: false },
        ],
    },];
/* solution */
function classCheck(day) {
    let size = classRoom.length;
    let tab = [];
    let cp = 0;
    let tmp_object
    for (let i = 0; i < size; i++) {
        tmp_object = classRoom[i];
        let the_key = Object.keys(tmp_object)[0];
        if(the_key[day]==true ){tab[cp]= the_key;cp++}

    }
    return tab ;
}

console.log(classCheck('Monday'));