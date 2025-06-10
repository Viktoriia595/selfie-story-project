document.addEventListener("DOMContentLoaded", () => {

  // ==== МОДАЛЬНЕ ВІКНО ====
  const openButtons = document.querySelectorAll('.open-modal');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-btn');
  const form = document.getElementById('bookingForm');

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Дякуємо за запис! Ми зв'яжемося з вами.");
    form.reset();
    modal.style.display = 'none';
  });

  // ==== ПОКАЗ / СХОВАННЯ ІНФОРМАЦІЇ ПРО КУРС ====
  const toggleButtons = document.querySelectorAll('.toggle-course');
  const courseInfo = document.getElementById('course-info');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      courseInfo.classList.toggle('hidden');
      button.textContent = courseInfo.classList.contains('hidden') ? "Переглянути курс" : "Сховати";
    });
  });

});
