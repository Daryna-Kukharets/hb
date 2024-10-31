document.addEventListener('DOMContentLoaded', function () {
  const showBtn = document.getElementById('showBtn');
  const per = document.getElementById('per');
  const startSection = document.getElementById('start');
  const secondSection = document.getElementById('second');
  const cake = document.getElementById('cake');
  const gifElement = document.querySelector('.second__gif');

  showBtn.addEventListener('click', function () {
    // Додаємо класи для анімації
    startSection.classList.add('hidden');
    secondSection.classList.add('visible');

    // Чекаємо завершення анімації перед зміною стилю
    setTimeout(() => {
      showBtn.style.display = 'none'; // Ховаємо стартову секцію
    }, 100); // Час, що відповідає тривалості анімації
  });

   // Затримка перед появою кнопки
   setTimeout(() => {
    cake.classList.add('visible'); // Додаємо клас для видимості
   }, 8000); // 8000 мс = 8 секунд
  
  cake.addEventListener('click', function () {
    gifElement.classList.add('visible'); // Додаємо клас для відображення гіфки
    setTimeout(() => {
      cake.style.display = 'none'; // Додаємо клас для видимості
    }, 200); // 8000 мс = 8 секунд
    
     setTimeout(() => {
       per.classList.add('visible');
      }, 6000); // 6000 мс = 8 секунд
  });

  
});