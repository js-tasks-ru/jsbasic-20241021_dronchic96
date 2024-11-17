/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable();
  }

  createTable() {
    const table = document.createElement("table");
    table.append(this.createHeader(), this.createBody());
    return table;
  }

  createHeader() {
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      `;
    return thead;
  }

  createBody() {
    const tbody = document.createElement("tbody");
    this.rows.forEach((row) => tbody.append(this.createRow(row)));
    return tbody;
  }

  createRow(row) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>
      `;

    this.addRemoveButtonListener(tr);
    return tr;
  }

  addRemoveButtonListener(rowElement) {
    const button = rowElement.querySelector("button");
    button.addEventListener("click", () => rowElement.remove());
  }
}
