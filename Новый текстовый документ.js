// Создаем функцию для отображения календаря
function showCalendar(year, month) {
  // Получаем элемент, в который будем выводить календарь
  const calendarContainer = document.getElementById("calendar");

  // Создаем новый объект Date с указанным годом и месяцем
  const date = new Date(year, month - 1);

  // Определяем количество дней в указанном месяце
  const daysInMonth = new Date(year, month, 0).getDate();

  // Определяем день недели 1-го числа месяца
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();

  // Создаем заголовок календаря с названием месяца и года
  const header = document.createElement("h2");
  header.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

  // Создаем таблицу календаря
  const table = document.createElement("table");

  // Создаем заголовки дней недели
  const weekdays = document.createElement("tr");
  weekdays.innerHTML = "<th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th>";

  // Добавляем заголовки дней недели в таблицу
  table.appendChild(weekdays);

  // Создаем ячейки для дней месяца
  let day = 1 - firstDayOfWeek;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (day > 0 && day <= daysInMonth) {
        cell.textContent = day;
      }
      row.appendChild(cell);
      day++;
    }
    table.appendChild(row);
  }

  // Очищаем предыдущий календарь и добавляем новый !!!! Препод задал вопрос на эти строчки !!!!
  calendarContainer.innerHTML = "";
  calendarContainer.appendChild(header);
  calendarContainer.appendChild(table);
}

// Пример использования функции для отображения календаря текущего месяца
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
showCalendar(currentYear, currentMonth);
