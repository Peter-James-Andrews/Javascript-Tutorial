module.exports = {add, subtract};

var names = ["George", "Matt", "Michael"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
};

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};