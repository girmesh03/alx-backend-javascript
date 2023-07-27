import handleResponseFromAPI from '../2-then';

const promise = Promise.resolve();
test('handleResponseFromAPI logs "Got a response from the API" to the console', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    await handleResponseFromAPI(promise);
    expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');
    consoleSpy.mockRestore();
});
