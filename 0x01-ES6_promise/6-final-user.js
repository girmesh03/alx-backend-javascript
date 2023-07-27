// 6-final-user.js

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);

    try {
        const [signUpResult, uploadResult] = await Promise.allSettled([
            signUpPromise,
            uploadPromise,
        ]);

        return [
            {
                status: signUpResult.status,
                value: signUpResult.status === 'fulfilled' ? signUpResult.value : signUpResult.reason,
            },
            {
                status: uploadResult.status,
                value: uploadResult.status === 'fulfilled' ? uploadResult.value : uploadResult.reason,
            },
        ];
    } catch (error) {
        return [];
    }
}

export default handleProfileSignup;
