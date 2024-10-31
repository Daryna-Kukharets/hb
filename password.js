const correctPassword = "01112002"; // Правильний пароль

function addDigit(digit) {
  const input = document.getElementById('password');
  input.value += digit; // Додаємо цифру до поля введення
}

function clearInput() {
  document.getElementById('password').value = ''; // Очищаємо поле введення
}

function backspace() {
  const input = document.getElementById('password');
  input.value = input.value.slice(0, -1); // Видаляємо останній символ
}

function submitPassword() {
  const input = document.getElementById('password').value;
  const message = document.getElementById('message');
  
  if (input === correctPassword) {
    // Якщо пароль правильний, перенаправляємо на інший HTML файл
    window.location.href = 'prickol.html';
  } else {
    // Якщо пароль неправильний, показуємо повідомлення про помилку
    message.textContent = 'Смол брейн!';
    clearInput();
  }
}