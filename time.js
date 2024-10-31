// Задана дата (припустимо, 1 січня 2024 року, 00:00)
const startDate = new Date('2021-03-14T18:00:00');

// Функція, що розраховує і відображає час
function updateTimeElapsed() {
  const now = new Date(); // Поточна дата і час
  const timeElapsed = now - startDate; // Час, що пройшов в мілісекундах

  // Перетворюємо мілісекунди у дні, години, хвилини і секунди
  const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  // Відображаємо результат у форматі "дні години:хвилини:секунди"
  document.getElementById('timeElapsed').textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
}

// Оновлюємо значення кожну секунду
setInterval(updateTimeElapsed, 1000);

// Викликаємо функцію одразу для початкового відображення часу
updateTimeElapsed();