//Q.6.Create a class Student with  properties enrolmentNumber and studentName.
//Write an arrow function display to display the student details.
var Student = /** @class */ (function () {
    function Student(enrollmentNumber, studentName) {
        var _this = this;
        this.display = function () {
            console.log(_this.enrollmentNumber);
            console.log(_this.studentName);
        };
        this.enrollmentNumber = enrollmentNumber;
        this.studentName = studentName;
    }
    return Student;
}());
var student = new Student('23', 'Barda');
student.display();
