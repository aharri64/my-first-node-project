function add(num1, num2) {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

//exporting modules
//method 1
module.exports = { add, subtract, divide }

