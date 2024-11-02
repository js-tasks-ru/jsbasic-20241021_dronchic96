function sumSalary(salaries) {
  let summ = 0;

  for (let key in salaries) {
    const value = salaries[key];
    if (typeof value === "number" && isFinite(value)) summ += value;
  }

  return summ;
}
