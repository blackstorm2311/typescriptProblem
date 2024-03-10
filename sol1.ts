// Proposed Fix:

// To resolve the error, we need to add type guards to narrow down the type of the input parameter before accessing its properties.
// Type guards help TypeScript infer the correct type of the variable based on certain conditions.

function getLength(input: string | number): number {
    if (typeof input === "string") {
        return input.length; // OK
    } else {
        return input.toString().length; // Convert number to string and get length
    }
}

console.log(getLength("HEY")); // Output: 3


