const convertToCelsius = function(f) {
  let celsius = (f - 32) * 5 / 9;
  let rounded = Math.round(celsius * 10) / 10;
  if (celsius === 0) {
    return celsius;
  }
  else {
    return rounded;
  }
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * 9 / 5 + 32);
  let rounded = Math.round(fahrenheit * 10) / 10;
  if (fahrenheit === 0) {
    return fahrenheit;
  }
  else {
    return rounded;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
