/* Call Stack Introduction */
function foo() {
    console.log('function foo is called');
    throw new Error('oops!');
}

function bar() {
    console.log('function bar is called');
    foo();
}

function baz() {
    console.log('function baz is called');
    bar();
}

baz();

/* Call Stack Overflow */
// function overflow() {
//     overflow();
// }

// overflow();
