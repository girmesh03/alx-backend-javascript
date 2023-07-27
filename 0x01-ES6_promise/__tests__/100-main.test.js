import asyncUploadUser from '../100-await';
import { uploadPhoto, createUser } from '../utils';

jest.mock('../utils', () => ({
  uploadPhoto: jest.fn().mockResolvedValue({ status: 200, body: 'photo-profile-1' }),
  createUser: jest.fn().mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' }),
}));

describe('asyncUploadUser', () => {
  it('should return an object with photo and user properties', async () => {
    const result = await asyncUploadUser();
    expect(result).toEqual({
      photo: { status: 200, body: 'photo-profile-1' },
      user: { firstName: 'Guillaume', lastName: 'Salva' },
    });
  });

  it('should return an empty object if uploadPhoto fails', async () => {
    uploadPhoto.mockRejectedValueOnce(new Error('Failed to upload photo'));
    const result = await asyncUploadUser();
    expect(result).toEqual({
      photo: null,
      user: null,
    });
  });

  it('should return an empty object if createUser fails', async () => {
    createUser.mockRejectedValueOnce(new Error('Failed to create user'));
    const result = await asyncUploadUser();
    expect(result).toEqual({
      photo: null,
      user: null,
    });
  });
});
