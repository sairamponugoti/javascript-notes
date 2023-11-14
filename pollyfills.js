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