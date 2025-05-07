const removeFromArray = function(array, n, m, o, p) {
    let arrayOfn = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        if(array[i] === n || array[i] === m || array[i] === o || array[i] === p) {
           array.splice(i, 1);
        }
    }
    for (let i = 0; i < arrayLength; i++) {
        if(array[i] === n || array[i] === m || array[i] === o || array[i] === p) {
           array.splice(i, 1);
        }
    }
    for (let i = 0; i < arrayLength; i++) {
        if(array[i] === n || array[i] === m || array[i] === o || array[i] === p) {
           array.splice(i, 1);
        }
    }
    for (let i = 0; i < arrayLength; i++) {
        if(array[i] === n || array[i] === m || array[i] === o || array[i] === p) {
           array.splice(i, 1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
