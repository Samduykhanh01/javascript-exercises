const repeatString = function (string, num) {
    if (num < 0) return "ERROR"
    let stringReturn = ""
    for (let i = 0; i < num; i++) {
        stringReturn += string
    }
    return stringReturn
};

// Do not edit below this line
module.exports = repeatString;