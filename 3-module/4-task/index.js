function showSalary(users, age) {
  let resultArr = [];

  for (const key in users) {
    if (users[key].age <= age) {
      resultArr.push(`${users[key].name}, ${users[key].balance}`);
    }
  }

  return resultArr.map((item, index, arr) =>
    index === arr.length - 1 ? item : item + "\n"
  ).join("");
}
