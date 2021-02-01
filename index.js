//how to import module
const myModule = require('./myModule')

console.log("Hello World")
function hello(name) {
    console.log(`Hello, ${name}`);
}

hello('Amir');


//invoking the function in the module
console.log(myModule.add(2, 2));