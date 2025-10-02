# 📘 MongoDB Завдання (studentDB)

Проєкт для практики роботи з MongoDB у **mongosh**.

## 📂 Структура
- `scripts/task1.js` → CRUD операції
- `scripts/task2.js` → Агрегаційні операції
- `scripts/task3.js` → Індекси та explain()

## 🚀 Як запускати

1. Запусти MongoDB (локально або у Docker):
   ```bash
   docker run -d -p 27017:27017 --name mongo mongo

2. Запусти mongosh:
mongosh

3. Виконай скрипти:
 
 Завдання 1
load("scripts/task1.js")

Завдання 2
load("scripts/task2.js")

Завдання 3
load("scripts/task3.js")

📦 Приклад результату
CRUD → створюються студенти, додаються/видаляються бали
Aggregation → середній бал за предметами
Index → пошук з explain(), показує меншу кількість переглянутих документів