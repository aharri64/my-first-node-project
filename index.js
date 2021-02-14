//* How to import module
const myModule = require('./myModule');
const myOtherModule = require('./myOtherModule');
const thirdModule = require('./thirdModule');



//* How we create a function
/*
console.log("Hello World")
function hello(name) {
    console.log(`Hello, ${name}`);
}

hello('Amir');
*/

//* invoking the function in the module
// console.log(myModule.add(2, 2));
// console.log(myModule.subtract(5, 4));
// console.log(myModule.divide(2,3));
// console.log(thirdModule.multiply(2, 2))

//* my other module
// myOtherModule.welcomeToNode()




//* fs & moment demonstration

const fs = require('fs');
const moment = require('moment');

//? the file to be read, the way you would like to view the file, what I want to do next
fs.readFile('nfl.txt', 'utf8', function (error, data) {
    //! 1. first see if there is an error
    if (error) {
        console.log('You have a problem reading this file');
    //! 2. if no error, then show the data
    } else {
        console.log(data);
    }
})


let myDate = moment('2021-02-01');
let addOneWeek = myDate.add(1, 'week');
console.log('myDate.format' + myDate.format())
let myClone = myDate.clone();
console.log('addoneweek' + addOneWeek);
console.log('myClone' + myClone)

// How to Comment

// normal
//* alerts
//!
//?
//TODO
/** 
* *alerts
* ??
* TODO TODO
* @param myParam 

*/