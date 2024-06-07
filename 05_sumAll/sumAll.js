const sumAll = function(a, b) {
    let total = 0;
    let array = [];
    if (a <= b) {
        for (let i = a; i <= b; ++i) {
            array.push(i);
        }
    }
    array.forEach(myFunction);
    function myFunction(item) {
        total += item;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
