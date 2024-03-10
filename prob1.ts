//GIVEN PROBLEM CODE

function getLength(input: string | number): number {
   
    return input.length; // Error: Property 'length' does not exist on type 'string | number'
}


console.log(getLength(123)); // Expected: 3
console.log(getLength("hello")); // Expected: 5









