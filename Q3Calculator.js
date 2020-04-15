var Calculator = /** @class */ (function () {
    function Calculator() {
        this.addition = function (number1, number2) {
            return number1 + number2;
        };
        this.subtraction = function (number1, number2) {
            return number1 - number2;
        };
        this.multiplication = function (number1, number2) {
            return number1 * number2;
        };
        this.Division = function (number1, number2) {
            return number1 / number2;
        };
    }
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.Division(10, 20));
console.log(calculator.addition(10, 20));
console.log(calculator.multiplication(10, 20));
console.log(calculator.subtraction(10, 20));
