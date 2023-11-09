/* 
    Difference b/w function statement and a function expression is Hoisting
    During the memory creation phase function a is allocated memory, but var b is allocated undefined
*/

a(); // logs "a"
b(); // TypeError: b is not a function

// Function Statement is nothing but Function Declaration. Both are same

    function a() {
        console.log("a")
    }

// Function Expression
    // we can assign a function to a varibale like below that is function expression
    var b = function () {
        console.log("a")
    }


// Anonymous function
    // Function without a name is an Anonymous function
    /* function () { 
        this results in a syntax error, because function statements require a function name
    } */
    // Anonymous functions are used when functions are used as values, i.e.. we can assign Anonymous functions to variables
    var b = function () {
        console.log("a")
    }

// Named Function Expression
    var c = function namedFn() {
        console.log("a")
    }
    c();
    namedFn() // this results in Reference Error: namedFn is not defined

// Differnece b/w Parametes and Arguments
    var b = function (param1, param2) { // function receives parameters
        console.log("a")
    }
    b("arg1", "arg2") // we pass arguments


// First Class Functions
    // The ability to use functions as values is called First class functions
    // The ability to return functions as values, pass functions as arguments is called First class functions

    var b = function(param1) {
        return function xyz() {

        }
    }
    function x() {}
    console.log(b)
    b(x) // we can pass function x as argument


// Arrow Functions
    // Introduced in ES6
    // All the function statements, function expressions can also be created using Arrow functions