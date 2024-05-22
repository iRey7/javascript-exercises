const removeFromArray = function(arr, removeA, removeB) {
    arr.splice(removeA - 1, 1);
    if(removeB >= 0) {
        arr.splice(removeB - 1, 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
