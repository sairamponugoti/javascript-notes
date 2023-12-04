/* 
    Object Literals
    If we want to create new objects out of a Object literal it is not possible
*/

const rectangle = {
    name: "rect",
    width: 100,
    height: 200,
    area: function () {
        this.width * this.height
    }
}

console.log(rectangle.area)

/* 
    Constructor Function
    Declare the name with first letter as capital letter it's a standard convention
    We can instantiate as many Rectangle Objects as we want using "new" keyword
        * A new empty object is created.
        * Constructor function is called with arguments that we pass in.
        * 'this' keyword is set to the new empty object
        * new object is returned from the constructor function

*/

function Rectangle(name, width, height) {
    this.name = name
    this.width = width
    this.height = height
    this.area = function() {
        return this.width * this.height
    }
}

const rect1 = new Rectangle("rect1", 100, 200)
const rect2 = new Rectangle("rect2", 100, 200)

console.log(rect1) // {name: "rect1", width: 100, height: 200}
console.log(rect1.constructor) // returns constructor function Rectangle
console.log(rect1 instanceof Rectangle) // true


/* Built in constructors

*/

const strLit = "Hello"
const strObj = new String("Hello")

console.log(strLit, typeof strLit) // "Hello", string
console.log(strObj, typeof strObj) // String{'Hello'}, object

// Boxing - JS wraps the literals with objects to access the methods
console.log(strLit.toUpperCase()) // JS adds a wrapper object ie.. it turns string literal here into new String('Hello')
console.log(strLit[0])

// UnBoxing - Object is turned into Literal here
console.log(strObj.valueOf(), typeof strObj.valueOf()) // Hello, string

console.log(strLit instanceof String) // False
console.log(strObj instanceof String) // true