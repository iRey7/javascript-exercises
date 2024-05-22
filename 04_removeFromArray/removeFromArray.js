const removeFromArray = function(arr, remove) {
    arr.splice(remove - 1, 1);

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
