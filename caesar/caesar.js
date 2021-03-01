const caesar = function(string, keyNumber) {
    const regex = /[a-zA-Z]/g; //regular expression to find all alphabet characters
    let encoded = string.replaceAll(regex, function(match) {
        // translate from letter to unicode
        let index = 0;
        let unicode = match.charCodeAt(index);

        if (unicode >= 65 && unicode <= 90) {
            unicode -= 65; // set unicode to 0-26
            unicode += keyNumber; // add keyNumber to shift unicode
            unicode = ((unicode % 26) + 26) % 26; // apply modulo
            unicode += 65 // reset unicode to 65 - 90
        } else if (unicode >= 97 && unicode <= 122) {
            unicode -= 97; // set unicode to 0 - 26
            unicode += keyNumber; // add keyNumber to shift unicode
            unicode = ((unicode % 26) + 26) % 26; // apply modulo
            unicode += 97; // reset unicode to 97 - 122
        }

        // convert from encoded unicode to encoded alphabet characters
        let result = String.fromCharCode(unicode);
        return result;
    });
    return encoded;
}

let encodedMessage = caesar('Hello, World!', 5);
console.log(encodedMessage);

module.exports = caesar

// reference about how caesar cipher works, and why modulo needs to be applied: https://www.dcode.fr/caesar-cipher
// note: Note that while in most languages, ‘%’ is a remainder operator, in some (e.g. Python, Perl) it is a modulo operator. For positive values, the two are equivalent, but when the dividend and divisor are of different signs, they give different results. To obtain a modulo in JavaScript, in place of a % n, use ((a % n ) + n ) % n.