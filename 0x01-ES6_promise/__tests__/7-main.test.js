import loadBalancer from '../7-load_balancer';

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise((resolve) => {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise((resolve) => {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise((resolve) => {
    setTimeout(resolve, 200, frSuccess);
});

test('loadBalancer resolves with ukSuccess', async () => {
    const result = await loadBalancer(promiseUK, promiseFR);
    expect(result).toBe(ukSuccess);
});

test('loadBalancer resolves with frSuccess even if ukPromise is slower', async () => {
    const result = await loadBalancer(promiseUKSlow, promiseFR);
    expect(result).toBe(frSuccess);
});
