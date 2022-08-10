const symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const items = s.split('')
    let total = 0
    
    for (let i = 0; i < items.length; i++) {
        if (symbols[items[i + 1]] > symbols[items[i]]) {
            total += -(symbols[items[i]])
        } else {
            total += symbols[items[i]]
        }
    }
    
    return total
};
