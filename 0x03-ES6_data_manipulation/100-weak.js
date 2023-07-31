// 100-weak.js

// Create a new WeakMap to store the number of times each endpoint is queried
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Get the number of times the endpoint has been queried from the weakMap
  let queryCount = weakMap.get(endpoint) || 0;

  // Increment the query count
  queryCount++;

  // Store the updated count in the weakMap
  weakMap.set(endpoint, queryCount);

  // Check if the query count exceeds or equals five and throw an error if so
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

