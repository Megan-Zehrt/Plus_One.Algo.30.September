// 66. Plus One



// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.








/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Traverse the digits array from right to left
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            // If the digit is 9, set it to 0 because adding 1 results in a carry
            digits[i] = 0;
        } else {
            // If the digit is not 9, just increment it by 1 and return the array
            digits[i] += 1;
            return digits;
        }
    }

    // If we exit the loop, it means all the digits were 9 and we have a carry
    // Insert 1 at the start of the array to handle this scenario (e.g., 999 + 1 -> 1000)
    digits.unshift(1);
    return digits;
};
