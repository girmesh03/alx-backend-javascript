import handleProfileSignup from '../3-all';
import { uploadPhoto, createUser } from '../utils';

jest.mock('../utils', () => ({
    uploadPhoto: jest.fn().mockResolvedValue({ status: 200, body: 'photo-profile-1' }),
    createUser: jest.fn().mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' }),
}));

test('handleProfileSignup logs "photo-profile-1 Guillaume Salva" to the console', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    await handleProfileSignup();
    expect(consoleSpy).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
    consoleSpy.mockRestore();
});
