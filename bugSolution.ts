function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, 2); // Correct
console.log(result1); // Output: 3

try {
  let result2 = add(1, "2"); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}

//Alternative using type assertion (use cautiously)
let result3 = add(1, parseInt("2") as number); // Correct, but less safe than previous solution
console.log(result3); // Output: 3