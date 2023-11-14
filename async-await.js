/* 
* Async function always returns a promise
* we can either return a promise explicitly or if we return a normal value then async function wraps it 
    in a promise and returns promise
* Async and Await combo is used to handle promises
* await is a keyword that can only be used inside a async function

*/

const prom = new Promise((resolve, reject) => {
    resolve("promise resolved")
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
    prom.then((res) => {console.log(res)})
}

/* with asyn await */

async function handlePromise() {
    const data = await prom; // we use await keyword infront of a promise that needs to be resolved
}

