import getResponseFromAPI from '../0-promise';

test('getResponseFromAPI should return a promise', () => {
    const response = getResponseFromAPI();
    expect(response instanceof Promise).toBe(true);
});
