const sumAll = function(a, b) {
    
    if (!isNumber(a) || !isNumber(b) || a < 0 || b < 0) return 'ERROR'
    let sum = 0;
    for (let i = min(a, b); i <= max(a, b); i++) {
        sum += i;
    }

    
    return sum;
};

function isNumber(x) {
    return typeof(x) === 'number';
}

function min(x, y) {
    return x < y ? x : y
}

function max(x, y) {
    return x > y ? x : y
}

// Do not edit below this line
module.exports = sumAll;
