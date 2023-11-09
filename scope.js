var a = 100;
let b= 100;
{
    // This is a block
    //Compound Statement
    // group of multiple statements

    var a=10; // This variable shadows var a = 100
    let b=20; // this b is shadowing the let b= 100;
    const c=30;

    // let and const are hoisted in Block Scope
    // var is hoisted in Global Scope
    console.log(a) // 10
    console.log(b) // 20
    console.log(c) // 30
}

console.log(a) // 10
console.log(b) // Reference Error and stops execution
console.log(c)


/* Closure */

function x() {
    var a = 10;

    function y() {
        console.log(a) // Here function y is bind with function x's Lexical scope
    }
    y();
}

x();

/* Closure snippet 2 */

function x() {
    var a = 10;

    function y() {
        console.log(a) // Here function y is bind with function x's Lexical scope
    }
    return y; // returns function y along with it's Lexical Scope
}

var z = x(); 
/* logs a=10 , because function y remembers it's lexical scope / it remebers where is is present in the code
    Doesn't matter where it is executed */
z(); 

/* Closure snippet 3 */

function z() {
    var b=100;
    return function y() {
        var a=10
        return function x() {
            console.log(a,b)
        }
    }
}

z()()(); // logs 10,100