const removeFromArray = function(array, ...elements) {
    let length = array.length;
    if (length == 0) return [];
    let newArray = [];
    
    /**
     * Way 1:
     * For each "item" in "array", 
     *   if "item" is not in "elements", then push that item into newArray
     */
    array.forEach(separate);
    function separate(item) {
        if (!elements.includes(item)) {
            newArray.push(item);
        }
    }

    /**
     * Way 2:

    for (const item of array) {
        if (!elements.includes(item)) {
            newArray.push(item)
        }
    }

    */

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
