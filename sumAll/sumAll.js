const sumAll = function(int1, int2) {
    let sum = 0;

    //check if parameter is positive integer.
    if (Number.isInteger(int1) && Number.isInteger(int2) && int1 > 0 && int2 > 0){
        if (int1 < int2) { 
            for (let i = int1; i <= int2; i++) {
                sum += i;
            }
        } else { // run this if the first parameter is the larger number
            for (let i = int2; i <= int1; i++) {
                sum += i;
            }
        }
    } else {
        return 'ERROR';
    }
    return sum;
}

module.exports = sumAll
