// Function Scope
var variable = 1;

function functionScopeTest() {
    if (true) {
        var inCondition = 2;
    }

    console.log(inCondition); // 2;

    return inCondition;
}

// Declare duplicated named variable
var duplicatedVariable = 1;

function duplicatedVariableTest() {
    var duplicatedVariable = 2;
    var duplicatedVariable = 3;

    console.log("duplicatedVariable :", duplicatedVariable);
}

duplicatedVariableTest();

// Declare no keyword variable
function noKeywordVariableTestOne() {
    noKeywordVariable = 1;

    console.log("noKeywordVariable (1) :", noKeywordVariable);
}

function noKeywordVariableTestTwo() {
    console.log("noKeywordVariable (2) :", noKeywordVariable);
}

noKeywordVariableTestOne();
noKeywordVariableTestTwo();

// Lexical Scope
var variable = "global";

function lexicalScopeTestOne() {
    console.log(variable); // undefined

    var variable = "local";

    console.log(variable); // local
}

function lexicalScopeTestTwo() {
    console.log(variable); // global
}

lexicalScopeTestOne();
lexicalScopeTestTwo();

// Hoisting
function hoistingTest() {
    var variable;
    console.log("variable :", variable); // variable : undefined

    variable = 1;
    console.log("variable :", variable); // variable : 1
}

hoistingTest();

// Scope Chain
var variable = "one";

function scopeChainTest() {
    var variable = "two";

    function returnVariable() {
        return variable;
    }

    console.log(returnVariable()); // two
}

scopeChainTest();

var variable = "one";

function returnVariable() {
    return variable;
}

function scopeChainTest(func) {
    var variable = "two";

    console.log(func()); // one
}

scopeChainTest(returnVariable);

// Block Scope
function usingVarKeyword() {
    for (var i = 0; i < 3; i++) {}
    console.log(i); // 3
}

function usingLetKeyword() {
    for (let i = 0; i < 3; i++) {}
    console.log(i); // ERROR!
}

usingVarKeyword();
usingLetKeyword();
