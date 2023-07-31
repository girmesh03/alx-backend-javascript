// 100-weak.js

// Create a WeakMap to track the number of queries for each endpoint
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap, if not, set its count to 0
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Get the current count for the endpoint and increment it
  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  // Check if the count is >= 5, throw an error
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
