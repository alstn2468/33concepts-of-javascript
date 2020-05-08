var objectVar = {};
var arrayVar = [];
var funcVar = function () {};
var classVar = class {};
var usingNewOjbect = new Object();
var usingNewArray = new Array();

console.log(typeof objectVar); // object
console.log(typeof arrayVar); // object
console.log(typeof funcVar); // function
console.log(typeof classVar); // funcion
console.log(typeof usingNewOjbect); // object
console.log(typeof usingNewArray); // object

var person = {
    name: "minsu",
    age: 22,
    job: "Developer",
};
var newPerson = person;

console.log(person); // {name: "minsu", age: 22, job: "Developer"}
console.log(newPerson); // {name: "minsu", age: 22, job: "Developer"}

person.job = "Front-End Developer";

console.log(person); // {name: "minsu", age: 22, job: "Front-End Developer"}
console.log(newPerson); // {name: "minsu", age: 22, job: "Front-End Developer"}

var person = {
    name: "minsu",
    age: 22,
    job: "Developer",
};
var newPerson = Object.assign({}, person);

console.log(person); // {name: "minsu", age: 22, job: "Developer"}
console.log(newPerson); // {name: "minsu", age: 22, job: "Developer"}

person.job = "Front-End Developer";

console.log(person); // {name: "minsu", age: 22, job: "Front-End Developer"}
console.log(newPerson); // {name: "minsu", age: 22, job: "Developer"}

var student = {
    info: {
        firstName: "kim",
        lastName: "minsu",
    },
    department: "Computer Software Engineering",
    grade: "senior",
    graduated: false,
};
var newStudent = Object.assign({}, student);

console.log(student);
// {
//     info: { firstName: "kim", lastName: "minsu" }
//     department: "Computer Software Engineering"
//     grade: "senior"
//     graduated: false
// }
console.log(newStudent);
// {
//     info: { firstName: "kim", lastName: "minsu" }
//     department: "Computer Software Engineering"
//     grade: "senior"
//     graduated: false
// }

student.info.firstName = "park";

console.log(student);
// {
//     info: { firstName: "park", lastName: "minsu" }
//     department: "Computer Software Engineering"
//     grade: "senior"
//     graduated: false
// }
console.log(newStudent);
// {
//     info: { firstName: "park", lastName: "minsu" }
//     department: "Computer Software Engineering"
//     grade: "senior"
//     graduated: false
// }
