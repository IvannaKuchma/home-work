# Express JWT Project

## Опис
Проект демонструє:
- Використання Node.js та Express.js
- Статичні файли та favicon
- Збереження теми користувача через cookies
- Авторизацію користувачів через JWT

## Встановлення
1. `npm install`
2. Створити `.env` файл із JWT_SECRET
3. `node server.js`

## Маршрути
- `/pug` - відображення PUG-шаблону
- `/ejs` - відображення EJS-шаблону
- `/set-theme/:theme` - змінити тему сайту
- `/auth/register` - POST: реєстрація користувача
- `/auth/login` - POST: логін користувача
- `/protected` - захищений маршрут, доступний лише з JWT
