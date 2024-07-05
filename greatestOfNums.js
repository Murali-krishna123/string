// Greatest of 3 numbers
var num1 = 10;
var num2 = 22;
var num3 = 63;

// Using ternary operator
result = num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;

console.log(result);

// greatest of 4 numbers
var num1 = 10;
var num2 = 22;
var num3 = 63;
var num4 = 1;

// Using ternary operator
result2 =
  num1 > num2
    ? num1 > num3
      ? num1 > num4
        ? num1
        : num4
      : num3
    : num2 > num3
    ? num2 > num4
      ? num2
      : num4
    : num3 > num4
    ? num3
    : num4;
console.log(result2);
