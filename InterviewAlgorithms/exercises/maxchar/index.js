// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let arr = str.split('');
//   let obj = {};
//   let max = 0 ;
// let maxC = '';
//   for(let i = 0;i <arr.length;i++){
    
//  if (!obj[arr[i]]){
//    obj[arr[i]] = 1;
//   }else{
//     obj[arr[i]]++;
//     if(obj[arr[i]]>max){
//       max.repeat=obj[arr[i]];
//       max.chr=obj[arr[i].keys];
//     }
//   }
// }
// console.log(obj);
// console.log(max);
// console.log(maxC);
// }

function maxChar(str) {

  var max = 0;
  var maxChar = '';
  
  const charMap = {};
  
  for(var i=0; i<str.length; i++){
  if(!charMap[str[i]]){
  charMap[str[i]] = 1;
  }
  else{
  charMap[str[i]]++;
  }
  }
  
  for(let char in charMap){
  if(charMap[char] > max){
  max = charMap[char];
  maxChar = char;
  }
  }
  
  return maxChar;
  
  }
module.exports = maxChar;
