//Q3: Create a simple Calculator using TypeScript.Implement Add,Multiply,Subtract 
//and Division operation on two numbers.

class Calculator
{
       number1 :number ;
       number2 : number;

    addition= (number1 :number ,number2 :number ) : number =>  
    {
        return number1+number2;
    }
    subtraction = (number1 : number ,number2 : number) : number => 
    {
        return number1-number2;
    }
    multiplication = (number1 : number ,number2 : number) : number =>  
    {
        return number1*number2;
    }
    Division = (number1 : number ,number2 : number) : number =>  
    {
        return number1/number2;
    }
    
}
var calculator =new Calculator();
console.log(calculator.Division(10,20));
console.log(calculator.addition(10,20));
console.log(calculator.multiplication(10,20));
console.log(calculator.subtraction(10,20));