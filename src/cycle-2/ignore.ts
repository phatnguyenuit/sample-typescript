// We can ignore the error by defining the "maxDepth" of the import depth
// but it still causes an error on execution
// RangeError: Maximum call stack size exceeded

/* eslint import/no-cycle: ['error', { maxDepth: 1 }] */
