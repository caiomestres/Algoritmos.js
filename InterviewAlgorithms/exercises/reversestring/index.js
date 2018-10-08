// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = [];
  for (let i = str.length; i > 0; i--) {
    arr.push(str[i - 1]);
  }
  console.log(arr.join(''));
  return arr.join('');
}

//str.split('').reverse().join('');

let number = 54321;
reverse(number.toString());
module.exports = reverse;
