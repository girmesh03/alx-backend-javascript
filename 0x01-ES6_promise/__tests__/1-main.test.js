// __tests__/1-main.test.js

import getFullResponseFromAPI from '../1-promise';

describe('getFullResponseFromAPI', () => {
  it('should resolve the promise with status 200 and body "Success" when argument is true', () => {
    return expect(getFullResponseFromAPI(true)).resolves.toEqual({
      status: 200,
      body: 'Success',
    });
  });

  it('should reject the promise with an error when argument is false', () => {
    return expect(getFullResponseFromAPI(false)).rejects.toThrow(
      'The fake API is not working currently'
    );
  });
});
