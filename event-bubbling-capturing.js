/* Event Bublling is the Default behaviour
    * addEventListener(eventName, callbackFn, Boolean(false/true))
    * Default is false --> Event Bubbling
    * If we set it to true --> Event Capturing
*/

// clicking on grandparent will print "Grand Parent clicked"
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grand Parent clicked")
})

// clicking on parent will print "Parent clicked" --> "Grand Parent clicked"
document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked")
})

// clicking on child will print "Child clicked" --> "Parent clicked" --> "Grand Parent clicked"
document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked")
})


/* Event Capturing
    * addEventListener(eventName, callbackFn, Boolean(false/true))
    * If we set it to true --> Event Capturing
*/

// clicking on grandparent will print "Grand Parent clicked"
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grand Parent clicked")
}, true)

// clicking on parent will print "Grand Parent clicked" --> "Parent clicked"
document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked")
}, true)

// clicking on child will print "Grand Parent clicked" --> "Parent clicked" --> "Child clicked"
document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked")
}, true)

// ******NOTE********: First Capturing Cycle will run then Bubbling Cycle will run

// clicking on grandparent will print "Grand Parent clicked"
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grand Parent clicked")
}, true)

// clicking on parent will print "Grand Parent clicked" --> "Parent clicked"
document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked")
}, false)

// clicking on child will print "Grand Parent clicked" --> "Child clicked" --> "Parent clicked"
document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked")
}, true)

/*  Example */

// clicking on grandparent will print "Grand Parent clicked"
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grand Parent clicked")
}, false)

// clicking on parent will print  "Parent clicked" --> "Grand Parent clicked"
document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked")
}, true)

// clicking on child will print "Parent clicked" --> "Child clicked" --> "Grand Parent clicked"
document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked")
}, false)



/* Event Delegation */

document.querySelector("#category")
.addEventListener("click", (e) => {
    console.log("Category parent clicked");
    console.log(e.target) // prints the element that clicked
})