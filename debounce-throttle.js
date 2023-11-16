let counter = 0
const getData = () => {
    // calls API and gets the data
    console.log("Fetching Data"+ counter++)
}

/* 
    * on every keyup event the getData is called above
    * But we want getData to be called only when there is a delay of certain time between two keyup events
    * Only call getData method when the difference of time b/w two keypress events is greater than or equal certain time (eg: >= 300ms)

*/

const debounce = function (fn, d) {
    let timer;
    return function() {
        clearTimeout(timer)
        console.log("timer cleared:"+timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, d)
        console.log("timer set: "+timer)
    }
}

const betterFunction = debounce(getData, 300)

/* Example with Lodash and custom Debounce implementation */

const btn = document.querySelector(".increment_btn")
const btnPressed = document.querySelector(".increment_pressed")
const triggered = document.querySelector(".increment_count")

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (cb, delay) => {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

const debouncedCount = _.debounce(() => {
    triggered.innerHTML = ++triggeredCount
}, 500)

btn.addEventListener("click", () => {
    btnPressed.innerHTML = ++pressedCount;
    debouncedCount()
})


/* Throttling
    * Rate limiting a function call when the event is triggered continuosly due to user actions
*/

const btnThrottle = document.querySelector(".increment_btn_throttling")
const btnPressedThrottle = document.querySelector(".increment_pressed_throttling")
const triggeredThrottle = document.querySelector(".increment_count_throttling")

var pressedCountThrottle = 0;
var triggeredCountThottle = 0;

const myThrottle1 = (cb, delay) => {
    let last = 0;
    return function(...args) {
        let now = new Date().getTime();
        if(now-last<delay) return;
        last = now;
        cb(...args)
    }
}

const myThrottle2 = (cb, delay) => {
    let shouldWait = false;
    return function(...args) {
        if(shouldWait) return;
        cb(...args)
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;          
        }, delay)
    }
}

const throttleCount = _.throttle(() => {
    triggeredThrottle.innerHTML = ++triggeredCountThottle;
}, 500)

btnThrottle.addEventListener("click", () => {
    btnPressedThrottle.innerHTML = ++pressedCountThrottle
    throttleCount()
})
