const repeatString = function(text, times) {
    let result = "";
    if (times < 0) {
        return "ERROR";
    } else {
        for (i = 0; i < times; i++) {
            result += text;
        }  
        return result;
    }
}

module.exports = repeatString
