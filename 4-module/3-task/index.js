function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let status = row.cells[3];
    let gender = row.cells[2];
    let age = row.cells[1];

    switch (status.dataset.available) {
    case "true":
      row.classList.add("available");
      break;
    case "false":
      row.classList.add("unavailable");
      break;
    default:
      row.setAttribute("hidden", "");
    }

    if (gender.innerText === "m") {
      row.classList.add("male");
    } else if (gender.innerText === "f") {
      row.classList.add("female");
    }

    if (parseInt(age.innerText, 10) < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
