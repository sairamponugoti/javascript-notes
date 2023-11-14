/* CALL METHOD */

let name = {
    firstName: "virat",
    lastName: "kohli",
    printFullName: function () {
       console.log(this.firstName+ "" + this.lastName)
    }
}

name.printFullName() // prints virat kohli

let name2 = {
    firstName: "sachin",
    lastName: "tendulkar"
}

// To print fullname we can use name objects printFullName() method
// We use Function Borrowing to do this

name.printFullName.call(name2) // prints sachin tendulkar

// we generally do it like this

let printFullNameFn = function () {
    console.log(this.firstName+ "" + this.lastName)
}

printFullNameFn.call(name2)

// If we want to pass any arguments to function

let printFullNameFnArgs = function (homeTown) {
    console.log(this.firstName+ "" + this.lastName + "" + homeTown)
}

/* 
    first argument is always the "This" reference
    Then we can pass comma seperated arguments next arg1,arg2,arg3....
*/
printFullNameFnArgs.call(name2, "Delhi")


/* APPLY METHOD 
    * Only difference b/w CALL and APPLY method is the way we pass arguments
    * First argument is always the "This" reference
    * Second argument is Array list
*/

printFullNameFnArgs.apply(name2, ["Mumbai"])


/* BIND METHOD 
    * Binds a method and returns the copy of that method
    * Bind gives us the copy of method and we can invoke it later
    * Whereas call and apply methods directly invokes the method
*/

let printMyName = printFullNameFnArgs.bind(name2, "Mumbai")
console.log(printMyName) // this is a function that needs to be invoked
printMyName()