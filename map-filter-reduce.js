/* Map - Transforms an array and returns new Array */

const arr = [1,2,3,4];

function double(x) {
    return x*2;
}

function triple(x) {
    return x*3;
}
const doubleArr = arr.map(double)
/* 
    const doubleArr = arr.map((item) => item*2)
*/
const tripleArr = arr.map(triple)

/* Filter - filter the array based on a condition and it returns a new array with filtered items */

const arr1 = [5,3,9,7,6];

function isOdd(x) {
    return x % 2;
}

const oddArr = arr1.filter(isOdd)


/* Reduce - To find sum of all elements in an array or max element */

const arrReduce = [5,1,3,2,6];

function findSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

function findMax(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(findSum(arrReduce))

const outputReduce = arr.reduce(function(acc, curr) {
    acc += curr;
    return acc;
}, 0)

const outputMaxReduce = arr.reduce(function(acc, curr) {
    if(curr > acc) {
        acc = curr
    }
    return acc;
}, 0)


/* Examples */

const users = [
    {firstName: "sairam", lastName: "ponugoti", age: 15},
    {firstName: "john", lastName: "michael", age: 20},
    {firstName: "max", lastName: "mender", age: 25},
    {firstName: "akshay", lastName: "saini", age: 30},
]

// list of full names

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`)

// how many people are with the ages list
// {15: 1, 20: 1, 25: 1, 30: 1}

const agesList = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] +=1
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log(agesList)