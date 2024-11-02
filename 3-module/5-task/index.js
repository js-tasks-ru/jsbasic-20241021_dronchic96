function getMinMax(str) {
  let numbers = str
    .split(" ")
    .map(parseFloat)
    .filter((num) => !isNaN(num));

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}