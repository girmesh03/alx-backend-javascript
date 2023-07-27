import uploadPhoto from '../5-photo-reject';

test('uploadPhoto returns a rejected promise with an error message', async () => {
    try {
        await uploadPhoto('guillaume.jpg');
    } catch (error) {
        expect(error.message).toBe('guillaume.jpg cannot be processed');
    }
});
