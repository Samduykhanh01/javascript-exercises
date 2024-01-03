const repeatString = function (string, num) {
    let stringReturn = ""
    for (let i = 0; i < num; i++) {
        stringReturn += `${i + 1}: ${string}\n`
    }
    return stringReturn
};

// Do not edit below this line
module.exports = repeatString;