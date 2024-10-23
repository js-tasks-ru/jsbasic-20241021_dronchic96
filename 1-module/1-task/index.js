function factorial(n) {
  if (!n) return 1;

  let result = n;

  for (let i = n; i > 1; i--) {
    result *= i - 1;
  }

  return result;
}

console.log(factorial(5));
