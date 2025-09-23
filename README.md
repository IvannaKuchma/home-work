# Express + MongoDB CRUD Demo

Цей проєкт демонструє повний **CRUD (Create, Read, Update, Delete)** на Node.js з Express та MongoDB Atlas.  
Фронтенд дозволяє додавати, редагувати та видаляти користувачів безпосередньо з браузера.

---

## **Технології**

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML/CSS/JS для фронтенду

---

## **Структура проекту**

home-work-64/
│
├─ public/
│ └─ index.html # фронтенд з формами та таблицею користувачів
├─ server.js # сервер з усіма CRUD маршрутами
├─ package.json # залежності та скрипти
├─ .env # Mongo URI та PORT
└─ README.md # документація

## **Налаштування**

1. Клонувати репозиторій:

```bash
git clone <YOUR_REPO_URL>
cd home-work-64

2. Встановити залежності:
npm install

3. Створити файл .env:
MONGO_URI=<ваш MongoDB Atlas URI>
PORT=3000

4. Запуск серверу:
npm start

5. Відкрити браузер:
http://localhost:3000/