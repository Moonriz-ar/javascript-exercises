const fibonacci = function(number) {
    let array = [0, 1];
    if (number < 0) {
        return "OOPS";
    } else {
        for (let i = 0; i < number; i++) {
            let firstPreceding = i;
            let secondPreceding = i + 1;
            let nextNumber = array[firstPreceding] + array[secondPreceding];
            array.push(nextNumber);
        }
        return array[number];
    }
}

module.exports = fibonacci
