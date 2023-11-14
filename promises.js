/* Promises are used to handle Async operations in JS */

const cart = ["shoes", "pants", "shorts"];

/* 
createOrderApi(cart); retunrns orderId

* Then we call the proceddToPayment with orderId

proceedToPayment(orderId); 

showOrderSummary(paymentInf);

updateWalletBalance()

*/

/* Using Callbacks */

createOrderApi(cart, function (orderId) { // passing the callback fn here and we expect createOrderApi to call our callback fn
    // We don't have any control over it
    proceedToPayment(orderId, function(paymentInf) {

        showOrderSummary(paymentInf, function() {

            updateWalletBalance()
        });
    });
});

/* Promises */
/* 
    In case of promises, promises call the callback fn automatically once it returns and we have control back
    It will call the callback fn only once
    Promises resolves Inversion of control issue
*/

const orderPromise = createOrderApi(cart); // returns a promise object

orderPromise.then(function (orderId) { // Attaching callback fn to promise object
    proceedToPayment(orderId);
})

// Promise chanining helps us getting out of Callback hell
createOrderApi(cart)
.then(function (orderId) { // Attaching callback fn to promise object
    return proceedToPayment(orderId);
}).then(function(paymentInf) {
     return showOrderSummary(paymentInf)
}).then(function() {
    return updateWalletBalance()
})



// fetch() is given by browsers to make API calls
// It returns promise

const GITHUB_API = "https://api.github.com/users/sponugoti";

const user = fetch(GITHUB_API); // returns a promise object

user.then(function(data) {
    console.log(data)
})


/* Creating our own promise and Error Handling 

createOrderPromise()
proceedToPaymentPromise()
showOrderSummaryPromise()
updateWalletPromeise()

*/

function createOrderPromise(cart) {

    const orderProm = new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid!!!")
            reject(err)
        }
        resolve("12345")
    });

    return orderProm;
}

function validateCart(cart) {
    return true;
}

function proceedToPaymentPromise(orderId) {
    const paymentProm = new Promise((resolve, reject) => {
        resolve("payment done")
    })
    return paymentProm;
}

function showOrderSummaryPromise(paymentInfo) {
    const summaryProm = new Promise((resolve, reject) => {
        resolve("order Summary")
    })
    return summaryProm;
}


function updateWalletPromise(orderSummary) {
    const walletProm = new Promise((resolve, reject) => {
        resolve("payment done wallet updated")
    })
    return walletProm;
}

createOrderPromise(cart)
    .then((orderInfo) => {
        console.log(`order info: ${orderInfo}`)
        return orderInfo;
    }).then((orderInfo) => {
        return proceedToPaymentPromise(orderInfo)
    }).then((paymentInfo) => {
        console.log(`payment info: ${paymentInfo}`)
        return showOrderSummaryPromise(paymentInfo)
    }).then((orderSummary) => {
        console.log(`order Summary: ${orderSummary}`)
        return updateWalletPromise(orderSummary)
    }).then((walletInf) => {
        console.log(`wallet Info: ${walletInf}`)
        return walletInf;
    }).catch((err) => {
        console.log(err.message)
    })


