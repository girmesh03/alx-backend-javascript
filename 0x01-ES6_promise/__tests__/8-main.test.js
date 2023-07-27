import divideFunction from '../8-try';

test('divideFunction should return the result of division', () => {
    expect(divideFunction(10, 2)).toBe(5);
});

test('divideFunction should throw an error when dividing by 0', () => {
    expect(() => divideFunction(10, 0)).toThrow('cannot divide by 0');
});
