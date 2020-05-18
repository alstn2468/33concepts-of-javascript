// Function decalre without function name
//function() {
//    console.log("This is IIFE!");
//}

// Return anonymous function
(function () {
    console.log("This is IIFE!");
});

// IIFE
(function () {
    console.log("This is IIFE!");
})();

// Declare variable at global scope
const array = [1, 2, 3];

function consoleArray() {
    console.log(array);
}

consoleArray();

// Decalre private variable using IIFE
(function () {
    const array = [1, 2, 3];
})();
console.log(array); // ReferenceError: array is not defined

const result = (function () {
    const array = [1, 2, 3];
    return array;
})();

console.log(result);

var counter = (function () {
    let count = 0;

    return {
        increase: function () {
            count++;
        },
        decrease: function () {
            count--;
        },
        reset: function () {
            count = 0;
        },
        getCount: function () {
            return count;
        },
    };
})();
console.log("Init :", counter.getCount());
counter.increase();
console.log("After increase :", counter.getCount());
counter.decrease();
console.log("After decrease :", counter.getCount());

counter.reset();

console.log("After reset :", counter.getCount());
