# Home Work 70

Це проєкт на Node.js з Express та MongoDB, розгорнутий через Docker.

## Потрібне

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (якщо хочеш запускати локально без Docker)

## Як запустити через Docker

1. Клонуй репозиторій:  

```bash
git clone <https://github.com/IvannaKuchma/home-work/tree/home-work-70>
cd home-work-70;

2. Побудуй і запусти контейнери:
docker compose up -d --build
Це запустить три контейнери:
Backend: http://localhost:4000
MongoDB: порт 27017 (для внутрішнього використання)
Mongo Express: http://localhost:8081;

3. Логін для Mongo Express:
Username: admin
Password: pass;

4.Зупинити і видалити контейнери та томи:
docker compose down -v