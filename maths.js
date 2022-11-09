module.exports = {};


var names = ["George", "Matt", "Michael"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
};

module.exports.add = function add(a, b) {
    return a + b 
};

module.exports.subtract = function subtract(a, b) {
    return a - b
};

