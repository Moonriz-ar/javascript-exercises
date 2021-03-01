const palindromes = function(string) {
    let clean = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let reverse = "";

    for (let i = clean.length - 1; i >= 0; i--) {
        let letter = clean[i];
        reverse += letter;
    }

   return (clean === reverse) ? true : false;
}

palindromes('Racecar!');

module.exports = palindromes
