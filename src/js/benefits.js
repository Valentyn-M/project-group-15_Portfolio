document.addEventListener('DOMContentLoaded', function() {
  // Створюємо новий елемент списку
  const newBenefitItem = document.createElement('li');
  newBenefitItem.classList.add('benefit-item');
  
  // Додаємо іконку
  const icon = document.createElement('div');
  icon.classList.add('icon');
  icon.textContent = '🚀'; // Нова іконка
  newBenefitItem.appendChild(icon);

  // Додаємо заголовок
  const title = document.createElement('h2');
  title.textContent = 'INNOVATION';
  newBenefitItem.appendChild(title);

  // Додаємо опис
  const description = document.createElement('p');
  description.textContent = 'Always staying up to date with the latest trends in technology to bring fresh ideas and innovation to your projects.';
  newBenefitItem.appendChild(description);

  // Знаходимо список та додаємо новий елемент до кінця списку
  const benefitsList = document.querySelector('.benefits-list');
  benefitsList.appendChild(newBenefitItem);
});
