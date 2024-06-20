const convertToCelsius = function(f) {
  let celsius = (f - 32) * 5 / 9;
  if (celsius === 0) {
    return celsius;
  }
  else {
    return celsius.toFixed(1);
  }
  //let roundedNumber = celsius.toFixed(1);

  //return roundedNumber;
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * 9 / 5 + 32);
  let roundedNumber = fahrenheit.toFixed(1);

  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
