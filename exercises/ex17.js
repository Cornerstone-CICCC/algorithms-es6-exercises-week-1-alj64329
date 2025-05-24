/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const laugh = function (num) {
    let msg = ""
    for (let i = 1; i <= num; i++) {
        msg += "ha"
    }
    return msg + "!"
}

console.log(laugh(3))