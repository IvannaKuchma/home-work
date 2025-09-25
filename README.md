# Express + MongoDB CRUD + Cursors + Aggregation

Цей проєкт демонструє роботу з MongoDB Atlas на Node.js/Express з підтримкою:
- CRUD операцій
- Курсорів для оптимальної обробки великих даних
- Агрегаційних запитів для статистики

---

## **Нові маршрути**

### **Курсори**
- `GET /users/cursor` – перебір всіх користувачів через курсор
- Використовується `cursor()` для економії пам’яті при великих колекціях

**Приклад запиту:**
```bash
GET http://localhost:3000/users/cursor

Відповідь:
[
  { "name": "Ivan", "email": "ivan@example.com" },
  { "name": "Anna", "email": "anna@example.com" },
  ...
]
