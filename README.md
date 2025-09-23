# Express + MongoDB Atlas Demo

Цей проєкт демонструє підключення до MongoDB Atlas за допомогою Node.js та Express. 
Він включає:

- Сервер на Express.js
- Підключення до MongoDB Atlas через Mongoose
- Маршрут для отримання користувачів (`/users`)
- Стильну веб-сторінку з таблицею користувачів

---

## **Технології**

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML, CSS, JS (Frontend)

---

## **Встановлення**

1. Клонуйте репозиторій:

```bash
git clone <YOUR_REPO_URL>
```bash
git clone <YOUR_REPO_URL>;

2. Перейдіть у папку проєкту:
cd home-work-64.

3. Встановіть залежності:
npm install;

4. Створіть файл .env у корені проєкту з таким вмістом:
MONGO_URI=ваш_URI_з_MongoDB_Atlas
PORT=3000

Зверніть увагу: у URI не повинно бути < > навколо пароля.


5. Запуск

Для запуску серверу:
npm start

Для розробки з автоматичним перезапуском при зміні файлів (за наявності nodemon):
npm run dev

