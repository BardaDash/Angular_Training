/*Q.4:Create a class named Employee that contains properties for the name,color and birth year.
Include get and set methods for these fields.Create a subclass named AdhocEmployee, which contains an 
additional field  that holds the number of hours he worked on and also write set and get method for the new field.Write a TypeScript application that demonstrates using objects of each class. */


class Employee {
    name: string;
    color: string;
    birthYear: string;
  
    getname(): string {
      return this.name;
    }
  
    setname(value: string) {
      this.name = value;
    }
  
    getcolor(): string {
      return this.color;
    }
  
    setcolor(value: string) {
      this.color = value;
    }
  
    getbirthYear(): string {
      return this.birthYear;
    }
  
    setbirthYear(value: string) {
      this.birthYear = value;
    }
  }
  
  class AdhocEmployee extends Employee {
    noOfWorkinghours: number;
  
    getNoOfWorkingHour(): number {
      return this.noOfWorkinghours;
    }
  
    setNoOfWorkingHour(value: number) {
      this.noOfWorkinghours = value;
    }
  } 
  
  
  const emp=new Employee();
  emp.setname("Barda");
  console.log( emp.getname());
  
  emp.setbirthYear("21/05/1992");
  console.log(emp.getbirthYear());
  
  
  emp.setcolor("red")
  console.log(emp.getcolor());  
  console.log(emp.getcolor());  
  
  const adhocEmployee = new AdhocEmployee();
  adhocEmployee.setNoOfWorkingHour(10)
  console.log(adhocEmployee.getNoOfWorkingHour());