const ftoc = function(inputTemperature) { 
    let result = (inputTemperature - 32) * (5 / 9);
    let rounded = Math.round(result * 10) / 10;
    return rounded;
}

const ctof = function(inputTemperature) {
    let result = (inputTemperature * (9 / 5)) + 32;
    let rounded = Math.round(result * 10) / 10;
    return rounded;
}

module.exports = {
  ftoc,
  ctof
}
