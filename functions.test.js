const func = require('./functions.js')

test('should return 2', () => {
    expect(func.returnTwo()).toBe(2)
})

test('should be hello, name', () => {
    expect(func.greeting('name')).toBe('Hello, name')
})
describe('math stuffs', () => {
    test('add numbers right', () => {
        expect(func.add(1, 2)).toBe(3)
    });
    test('add numbers right', () => {
        expect(func.multiply(1, 2)).toBe(2)
        expect(func.multiply(2, 3)).toBe(6)
    });

})
