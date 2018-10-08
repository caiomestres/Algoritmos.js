// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // fizz % 3 = 0
  // buzz % 5 = 0
  // fizzbuzz % 15 = 0
  for (let i = 0; i < 0; i++) {
    if (fizz % 15 === 0) {
      return 'fizzbuzz';
    } else if (n % 3 === 0) {
      return 'fizz';
    } else if (n % 5 === 0) {
      return 'buzz';
    }
    return n;
  }
}
module.exports = fizzBuzz;
