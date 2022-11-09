const {populateArray} = require('./fizzbuzz');

test('Array contains 1 to 15', () => {
    expect(populateArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

// test('subtracts two', () => {
//     expect(subtract(9, 8)).toBe(1);
// });