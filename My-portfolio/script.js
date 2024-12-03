// Получаем элементы формы
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Обрабатываем событие отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Получаем значения полей ввода
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Формируем текст сообщения для отправки в Телеграм
  const CHAT_ID = "2017744560";
  const BOT_TOKEN = "6892138869:AAEEswD7LvlSAljvLqDbEcNHvFz5HfrqH38";
  const text = `Новое сообщение с сайта:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

  // Отправляем сообщение в Телеграм через API бота
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const data = {
    chat_id: CHAT_ID,
    text: text,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Сообщение отправлено в Телеграм!');
      } else {
        console.error('Ошибка отправки сообщения в Телеграм:', response.status);
      }
    })
    .catch((error) => {
      console.error('Ошибка отправки сообщения в Телеграм:', error);
    });
 
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});