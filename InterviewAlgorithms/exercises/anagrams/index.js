// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //pode ser refatorado usando uma função 'limpar' limpar(strA) === limpar(strB)!
  let strA = stringA
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  let strB = stringB
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  return strA === strB;
}
anagrams('hello', 'llohe');
module.exports = anagrams;
