# 🚀 Express + MongoDB у Docker

Невеликий демонстраційний проект, який показує, як розгорнути **Express.js** додаток з базою даних **MongoDB** у Docker-контейнерах за допомогою **Docker Compose**.  
Додаток має просту веб-сторінку та REST API для роботи з користувачами.

---

## 📂 Структура проекту

├── app.js # Точка входу (Express сервер)
├── package.json # Залежності Node.js
├── Dockerfile # Опис образу для Express
├── docker-compose.yml # Конфігурація контейнерів
│
├── models/ # Mongoose моделі
│ └── User.js
│
├── routes/ # Маршрути
│ └── users.js
│
├── views/ # EJS шаблони
│ ├── index.ejs
│ └── users.ejs
│
└── public/ # Статичні файли (CSS, зображення)
└── styles.css


---

## ⚡ Запуск

### 1. Клонування проекту
```bash
git clone https://github.com/your-username/express-docker-mongo.git
cd express-docker-mongo

2. Запуск у Docker
docker compose up --build

3. Відкрий у браузері:
http://localhost:3000 → головна сторінка
http://localhost:3000/users → список користувачів