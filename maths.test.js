const {add, subtract} = require('./maths');

test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts two', () => {
    expect(subtract(9, 8)).toBe(1);
});