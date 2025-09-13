const express = require('express');
const path = require('path');
const app = express();

// Використовуємо порт із середовища або 3000
const DEFAULT_PORT = 3000;
let PORT = process.env.PORT || DEFAULT_PORT;

// Статичні файли (CSS, картинки тощо)
app.use(express.static(path.join(__dirname, 'public')));

// --- PUG для користувачів ---
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Дані користувачів
const users = [
  { id: 1, name: 'Ivanka', age: 25 },
  { id: 2, name: 'Olena', age: 30 },
  { id: 3, name: 'Mykola', age: 28 }
];

// --- EJS для статей ---
app.engine('ejs', require('ejs').renderFile);

// Дані статей
const articles = [
  { id: 1, title: 'Node.js Basics', content: 'Node.js tutorial content...' },
  { id: 2, title: 'Express Tips', content: 'Express tips content...' },
  { id: 3, title: 'EJS vs PUG', content: 'Comparison content...' }
];

// --- Головна сторінка ---
app.get('/', (req, res) => {
  res.send(`
    <h1>Ласкаво просимо!</h1>
    <ul>
      <li><a href="/users">Список користувачів</a></li>
      <li><a href="/articles">Список статей</a></li>
    </ul>
  `);
});

// --- Маршрути для користувачів (PUG) ---
app.get('/users', (req, res) => {
  res.render('users/index', { users });
});

app.get('/users/:userId', (req, res) => {
  const user = users.find(u => u.id == req.params.userId);
  if (!user) return res.status(404).send('Користувача не знайдено');
  res.render('users/detail', { user });
});

// --- Маршрути для статей (EJS) ---
app.get('/articles', (req, res) => {
  res.render('articles/index.ejs', { articles });
});

app.get('/articles/:articleId', (req, res) => {
  const article = articles.find(a => a.id == req.params.articleId);
  if (!article) return res.status(404).send('Статтю не знайдено');
  res.render('articles/detail.ejs', { article });
});

// --- Функція запуску сервера з перевіркою порту ---
function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Порт ${port} зайнятий, пробуємо ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
}

// --- Запуск ---
startServer(PORT);
