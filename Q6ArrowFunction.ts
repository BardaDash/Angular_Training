//Q.6.Create a class Student with  properties enrolmentNumber and studentName.
//Write an arrow function display to display the student details.

class Student { 
    enrollmentNumber: string;
    studentName: string;

    constructor(enrollmentNumber, studentName) { 
        this.enrollmentNumber = enrollmentNumber;
        this.studentName = studentName;
    }

    display = () => { 
        console.log(this.enrollmentNumber);
        console.log(this.studentName);
    }
}

var student = new Student('23', 'Barda');
student.display();