import signUpUser from '../4-user-promise';

test('signUpUser returns a resolved promise with firstName and lastName', async () => {
    const user = await signUpUser('John', 'Doe');
    expect(user).toEqual({ firstName: 'John', lastName: 'Doe' });
});
