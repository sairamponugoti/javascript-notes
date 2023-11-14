/* Function Currying 
    * We make a copy of a method and create more methods out of it by presetting some arguments inside the 
    function
*/

let multiply = function (x, y) {
    console.log(x*y)
}

/* 
*Below code will return copy of multiply function with first argument x as 2 by default
function multiplyByTwo(y) {
    let x = 2;
    console.log(x*y)
}

*/
let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)

let multiplyBythree = multiply.bind(this, 2, 3)
multiplyBythree(6) // 6 will be ignored because in above we are already passing the two arguments required 


/* 
    * Using function closures to do function currying
*/

let multiplyClosure = function(x) {
    return function(y) {
        console.log(x*y)
    }
}

multiplyClosure(2)(3)

/* 
    sum(1)(2)(3)(4).......(10)
*/

let sum = function(a) {
    return function(b) {
        /* if(b) { // Results in Bug if we don't check type of b
            return sum(a+b)
        } */
        if(isNaN(b)){
            return sum(a+b)
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)()) // prints 10
console.log(sum(1)(2)(3)(0)(4)()) // Prints TypeError: is not a function because 0 is a falsy value in JS
// So instead of checking for if(b) above we need to check for type if(isNaN(b))