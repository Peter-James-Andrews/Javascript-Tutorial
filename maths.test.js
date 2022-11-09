const maths = require('./maths');

test('adds two numbers', () => {
    expect(maths.add(1, 2)).toBe(3);
});

test('subtracts two', () => {
    expect(maths.subtract(9, 8)).toBe(1);
});