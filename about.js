// Отримуємо всі елементи з класом fade-in
const fadeElements = document.querySelectorAll('.about__fade-in');

// Функція для перевірки видимості елементів
function checkVisibility() {
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    // Перевіряємо, чи елемент на екрані
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible'); // Додаємо клас для анімації
    }
  });
}

// Викликаємо функцію при прокручуванні сторінки
window.addEventListener('scroll', checkVisibility);

// Початковий виклик для завантажених елементів
checkVisibility();