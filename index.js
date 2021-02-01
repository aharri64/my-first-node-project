// //how to import module
// const myModule = require('./myModule');
// const myOtherModule = require('./myOtherModule');
// const thirdModule = require('./thirdModule');

// console.log(thirdModule.multiply(2, 2))


// console.log("Hello World")
// function hello(name) {
//     console.log(`Hello, ${name}`);
// }

// hello('Amir');


// //invoking the function in the module
// console.log(myModule.add(2, 2));
// console.log(myModule.subtract(5, 4));

// //my other module
// myOtherModule.welcomeToNode()




//fs

const fs = require('fs');
const moment = require('moment');

fs.readFile('nfl.txt', 'utf8', function (error, data) {
    if (error) {
        console.log('You have a problem reading this file');
    } else {
        console.log(data);
    }
})


let myDate = moment('2021-02-01');
let addOneWeek = myDate.add(1, 'week');
console.log(myDate.format())