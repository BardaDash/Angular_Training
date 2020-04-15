//Q1: Create a sample application in Typescript to find the factorial of a number.
// (hint: initialize the no in a variable. No need to take input from user)

var inputNum = 5;
var i;
var factorial = 1;
for (i = 1; i <= inputNum; i++) {
    factorial = factorial * i;
}
console.log(factorial);