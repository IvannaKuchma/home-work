const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Статика
app.use(express.static(path.join(__dirname, 'public')));

// Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Головна сторінка
app.get('/', (req, res) => {
  const theme = req.cookies.theme || 'light';
  res.render('index', { theme });
});

// Зміна теми
app.post('/theme/set', (req, res) => {
  const theme = req.body.theme || 'light';
  res.cookie('theme', theme, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    httpOnly: false,
    sameSite: 'lax',
    path: '/'
  });
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
