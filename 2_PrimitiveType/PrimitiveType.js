// Primitive Type
console.log(true instanceof Object);
console.log(false instanceof Object);
console.log(null instanceof Object);
console.log(undefined instanceof Object);
console.log(1 instanceof Object);
console.log(100 instanceof Object);
console.log(3.14 instanceof Object);
console.log('Primitive' instanceof Object);
console.log(Symbol() instanceof Object);
console.log(9007199254740991n instanceof Object);

// Reference Type
console.log({ foo: 'bar' } instanceof Object);
console.log([1, 'foo'] instanceof Object);
function func() {
    console.log('function');
}
console.log(func instanceof Object);

// Primitve Type, Reference Type
let firstName = 'minsu';
let secondName = firstName;

console.log('firstName :', firstName); // firstName : minsu
console.log('secondName :', secondName); // secondName : minsu

firstName = 'hun';
console.log('secondName :', secondName); // secondName : minsu

let firstPerson = {
    name: 'minsu',
    age: 22
};
let secondPerson = firstPerson;

console.log('firstPerson :', firstPerson); // firstPerson : { name: 'minsu', age: 22 }
console.log('secondPerson :', secondPerson); // firstPerson : { name: 'minsu', age: 22 }

firstPerson.age = 23;
console.log('secondPerson :', secondPerson); // firstPerson : { name: 'minsu', age: 23 }

let assignLikePrimitiveOne = {
    name: 'minsu',
    age: 22
};
let assignLikePrimitiveTwo = Object.assign({}, assignLikePrimitiveOne);

console.log('assignLikePrimitiveOne :', assignLikePrimitiveOne); // assignLikePrimitiveOne : { name: 'minsu', age: 22 }
console.log('assignLikePrimitiveTwo :', assignLikePrimitiveTwo); // assignLikePrimitiveTwo : { name: 'minsu', age: 22 }

assignLikePrimitiveOne.age = 23;
console.log('assignLikePrimitiveTwo :', assignLikePrimitiveTwo); // assignLikePrimitiveTwo : { name: 'minsu', age: 22 }

// Object in Object (Shallow Copy)
let firstInfo = {
    name: 'minsu',
    age: 22,
    hobbies: ['Baseball', 'Basketball']
};

let secondInfo = Object.assign({}, firstInfo);

console.log('firstInfo :', firstInfo); //firstInfo : { name: 'minsu', age: 22, hobbies: [ 'Baseball', 'Basketball' ] }
console.log('secondInfo :', secondInfo); //secondInfo : { name: 'minsu', age: 22, hobbies: [ 'Baseball', 'Basketball' ] }

firstInfo.hobbies.push('Games');
console.log('secondInfo :', secondInfo);
// secondInfo : {
//   name: 'minsu',
//   age: 22,
//   hobbies: [ 'Baseball', 'Basketball', 'Games' ]
// }
