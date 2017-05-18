var add = function(number1, number2) {
  return number1 + number2;
}
var subtract = function(number1, number2) {
  return number1 - number2;
}
var multiply = function(number1, number2) {
  return number1 * number2;
}
var divide = function(number1, number2) {
  return number1 / number2;
}

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

alert(add(number1, number2));
alert(subtract(number1, number2));
alert(multiply(number1, number2));
alert(divide(number1, number2));

var imperialToMetric = function() {
	var input = parseFloat(prompt("Enter the volume in gallons:"));
  return alert((input * 3.785).toPrecision(5));
}
imperialToMetric();
