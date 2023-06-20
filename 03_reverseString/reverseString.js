const reverseString = function (string) {
  let i = string.length;
  let reversedString = [];
  while (i >= 0) {
    let slicedString = string.slice(i - 1, i);
    reversedString.push(slicedString);
    i--;
  }
  return reversedString.join("");
};
reverseString("Hello");
// Do not edit below this line
module.exports = reverseString;
