
/* Execution Context */
/* 
1. Global Execution Context is created
2. It contains two phases Memory and Code
3. In 1st phase JS allocates Memory to all the variables and functions
    - n: undefined
    - square: fn (whole function is stored)
    - square2: undefined
    - square4: undefined
4. 2nd Phase Code Execution Phase - In this phase JS runs through the code line by line and starts execution
    - n is assigned value 2
    - Then square(2) function is Invoked - In JS when a function is invoked a brand new execution context is created
        - Memory allocation (Phase 1)
            - num: undefined
            - ans: undefined
        - Code Execution (Phase 2)
            - num: 2
            - ans: 4
            - return keyword returns the control back to the execution context where the function is invoked
            - After return the Exection Context will be Deleted.

*/

var n = 2;
// functions receives PARAMETERS, num here is PARAMETER
function square(num) {
    var ans = num * num;
    return ans;
}

// we pass ARGUMENTS while calling a function, n here is ARGUMENT
var square2 = square(n);
var square4 = square(4);


/* Hoisting */

    /* Snippet 1 */

    getName() // Prints "Hello getName"
    getName2() // not a function error
    getName3() // not a function error
    console.log(x) // Prints "undefined"
    console.log(y) // Reference Error: Not Defined

    var x = 7;
    var getName2 = function () { console.log("Hello getName2")}
    function getName() {
        console.log("Hello getName")
    }

    var getName3 = () => {
        console.log("Hello getName3")
    }

    /* Snippet 2 */

    var x = 1;
    a(); // Prints 10
    b(); // Prints 100
    console.log(x)  // Prints 1

    function a() {
        var x = 10;
        console.log(x);
    }

    function b() {
        var x = 100;
        console.log(x);
    }

    /* Snippet 3 */

    function a() {
        var b = 10;
        c() // Local ref + lexical env of "a"
        function c () {

        }
    }
    a(); // Local ref + lexical env of global

