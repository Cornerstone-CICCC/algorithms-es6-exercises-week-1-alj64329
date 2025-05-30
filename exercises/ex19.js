/*
Call the emotions() function so that it prints the output you see below, 
but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(par, func) {
    let num = 2
    console.log(`I am ${par}, ${func(num)}`)
}

emotions("happy", function laugh(num) {
    let msg = ""
    for (let i = 1; i <= num; i++) {
        msg += "ha"
    }
    return msg + "!"
}); 
