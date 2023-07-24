// 0-constants.js

// Modify the function to use 'const'
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

// Modify the function to use 'let'
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}

// Helper function - no need to modify this one
export function getLast() {
    return ' is okay';
}
