/* Snippet 1 */

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

/* Snippet 2 */

function x() {

    var i = 1;
    /* setTimeout takes the callback function and attaches a timer to it and store it in memory
        once the timer expires it puts back that function in the callStack and executes it
    */
    setTimeout(function() {
        console.log(i);
    }, 1000)
}

x(); // logs 1 after 1 second


/* Snippet 3 */

function x() {
    for(var i=1; i<=5; i++) {
        setTimeout(function() {
            // This function remembers the Reference to i not the value of i
            // So by the time this loop executes value of i is 6 and when the callback functions are executed
            // they refer to i which is 6
            console.log(i);
        }, i * 1000)
    }   
}

x(); // logs 6,6,6,6,6 5 times


/* Snippet 4 */

function x() {
    for(let i=1; i<=5; i++) {
        setTimeout(function() {
            // Because let is Block Scoped, each time setTimeout is run the callback function has a new copy of i with it.
            console.log(i);
        }, i * 1000)
    }   
}

x(); // logs 1,2,3,4,5


/* Snippet 5 */

function x() {
    for(var i=1; i<=5; i++) {
        function close(i) {
            // Using Closures, using this close function everytime we call close(i) we have a new copy of i.
            setTimeout(function() {
                console.log(i);
            }, i * 1000)
        }
        close(i)
    }   
}

x(); // logs 1,2,3,4,5


/* Data Hiding and Encapsulation */

var counter = 0;

function incrementCounter() {
    counter++
}

// Anybody can access this counter variable above
// We can use Closure to hide the counter

function counter() {
    var count = 0;

    return function incrementCounter() {
        count ++
    }
}

var counter1 = counter();
counter1(); // count increases to 1
counter1(); // count increase to 2
var counter2 = counter(); // this will be a new reference to the incrementCounter
counter2(); // count increase to 1

// To make the above code scalable and add decrement function as well, we can create a CONSTRUCTOR Function

function Counter() {
    var count = 0;

    this.incrementCounter = function() {
        count++;
    }
    this.decrementCounter = function() {
        count--;
    }
}

var counter1 = new Counter(); // Because Counter is a CONSTRUCTOR function we need to use "new" Keyword
counter1.incrementCounter();


/* Snippet 6 */

let globalCount = 0;

document.getElementById("clickMe").addEventListener("click", function cb () {
    console.log("Button CLicked", ++globalCount)
})

// In the above code we have a globalVarible and there is a chance of overriding it, to protect that we need a closure

function attachEventListener() {
    let count = 0;

    document.getElementById("clickMe").addEventListener("click", function cb () {
        console.log("Button CLicked", ++count)
    })

    // Now the callback fn cb() forms a closure, it will have access to it's Lexical scope
}

attachEventListener()
