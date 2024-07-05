let num = prompt();
if (num < 0) {
  return -1;
} else if (num === 0 || num === 1) {
  return 1;
} else {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}
