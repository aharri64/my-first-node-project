//how to import module
const myModule = require('./myModule');
const myOtherModule = require('./myOtherModule');
const thirdModule = require('./thirdModule');

console.log(thirdModule.multiply(2, 2))


console.log("Hello World")
function hello(name) {
    console.log(`Hello, ${name}`);
}

hello('Amir');


//invoking the function in the module
console.log(myModule.add(2, 2));
console.log(myModule.subtract(5, 4));

//my other module
myOtherModule.welcomeToNode()