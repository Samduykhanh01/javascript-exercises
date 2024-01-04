const reverseString = function(stringString) {
    const stringArray = stringString.split("")
    length = stringString.length
    let str = ""
    for (let i = length - 1; i > -1; i--){
        str += stringArray[i]
    }

    return str

};

// Do not edit below this line
module.exports = reverseString;
