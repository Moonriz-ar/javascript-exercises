const leapYears = function(inputYear) {
    let result; // Leap year => result = true; Not Leap year => result = false

    if (inputYear % 4 === 0) {
        if (inputYear % 100 === 0) {
            if (inputYear % 400 === 0) {
                result = true;
            } else {
                result = false;
            }
        } else {
            result = true;
        }
    } else {
        result = false;
    }

    return result;
}

module.exports = leapYears
