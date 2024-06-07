const sumAll = function(a, b) {
    let total = 0;
    let array = [];
    if (a < 0 || typeof a !== "number") {
        return 'ERROR';
    }
    else if (a <= b && a > 0) {
        for (let i = a; i <= b; ++i) {
            array.push(i);
        }
    }

    if (b < 0 || typeof b !== "number") {
        return 'ERROR';
    }
    else if (b <= a && b > 0) {
        for (let i = b; i <= a; ++i) {
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
