const reverseString = function(userText) {
  let i = userText.length - 1;
  let reversedUserText = [];
  let result = "";

  while (i >= 0) {
      reversedUserText.push(userText[i]);
      i--;
  }

  for (let letter in reversedUserText) {
    result += reversedUserText[letter];
  }

  return result;
}

module.exports = reverseString
