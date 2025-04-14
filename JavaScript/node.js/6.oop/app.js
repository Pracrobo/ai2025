const Person = require('./Person');
const Student = require('./Student');



const john = new Person("John");
// john.name = "John";
john.greet();


const smith = new Student("Smith", "art");
// smith.name = "Smith";
smith.greet()



const aStudent = new Student('park', 'engineering');
aStudent.greet();