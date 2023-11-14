/* MAP polyfill */

Array.prototype.mapPoly = (cb) => {
    const mappedArr = [];

    for(let i=0; i<this.length; i++) {
        mappedArr.push(cb(this[i]))
    }
    return mappedArr;
}

const arr1 = [1,2,3,4];

const arr2 = arr1.mapPoly((item) => 2*item)


/* Polyfill for Bind() Method */

let name = {
    firstName: "Virat",
    lastName: "Kohli"
}

let printFullName = function(homeTown, state, country) {
    console.log(`${this.firstName} ${this.lastName} ${homeTown} ${state} ${country}`)
}

Function.prototype.myBind = function(...args) {
    let obj = this
    let params = args.slice(1)
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName = printFullName.myBind(name, "hyderabad", "telangana")
printMyName("India")