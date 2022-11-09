module.exports = {populateArray};

function populateArray(length) {
    var numbers = []
    for (let i = 1; i < length; i++) {
        numbers.push(i);
    }
    return numbers
};