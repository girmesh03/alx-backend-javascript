function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        resolve({ status: 200, body: 'Success' });
        reject(Error('Status code is 404'));
    });
}

export default getResponseFromAPI;
