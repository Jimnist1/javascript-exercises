const repeatString = function (word, numberRepeats) {
  if (numberRepeats >= 0) {
    let repeatedWord = "";
    while (numberRepeats > 0) {
      repeatedWord += word;
      numberRepeats--;
    }
    return repeatedWord;
  } else return "ERROR";
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
