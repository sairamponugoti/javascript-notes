/* 
* Async function always returns a promise
* we can either return a promise explicitly or if we return a normal value then async function wraps it 
    in a promise and returns promise
* Async and Await combo is used to handle promises
* await is a keyword that can only be used inside a async function

*/

const prom = new Promise((resolve, reject) => {
    setTimeout(()=> {resolve("promise resolved")},5000)
})

const prom2 = new Promise((resolve, reject) => {
    setTimeout(()=> {resolve("promise resolved")},10000)
})

async function getData() {
    return "Hello!!!" // wraps it in a promise and returns
    // return prom; // As prom is already a promise it just returns that prom
}

const dataProm = getData(); // returns a promise object
console.log(dataProm)
dataProm.then((res) => {
    console.log(res)
})

/* How do we handle promises before Async Await */

function handleGetDataProm() {
    // JS Engine won't wait for the promise to be resolved.
    // It continues it's execution
    prom.then((res) => {console.log(res)})
    console.log("JS Engine won't wait")
}

/* with async await */

async function handlePromise() {
    // JS Engine waits for the promise to be resolved before it starts executing next lines of code --> Not True
    const data = await prom; // we use await keyword infront of a promise that needs to be resolved
    console.log("JS Engine waited for the promise to be resolved")
    console.log(data)
}

async function handleMultiplePromises() {
    console.log("Hello world")

    /* 
        * As soon as JS Engine reaches here and see await keyword it suspends the execution of handleMultiplePromises function (takes this function out of callstack) and continues with other
        parts of program
        * After the promise is resolved handleMultiplePromises function execution start again
    */
    const p1 = await prom; 
    console.log("Namste JS")
    console.log(p1)

    const p2 = await prom1;
    console.log("namaste js 2")
    console.log(p2)
}

async function handleFetchProm() {
    // fetch returns a Response object (DataStream) (it is a promise)
    // Response.json() also returns a promise
    try {
        const data = await fetch("https://api.github.com/users/sponugoti");
        const jsonVal = await data.json()
        console.log(jsonVal)
    }
    catch (err) {
        console.log(err)
    }
    
}

handleFetchProm()

// To handle errors we can use try, catch blocks
// Another way is handleFetchProm().catch((err) => console.log(err))

