require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

// --- In-memory users ---
const users = [];

// --- Middleware ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- View engine ---
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// --- Session ---
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // true якщо https
    maxAge: 60 * 60 * 1000
  }
}));

// --- Passport ---
app.use(passport.initialize());
app.use(passport.session());

// --- Passport local strategy ---
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  const user = users.find(u => u.email === email);
  if (!user) return done(null, false, { message: 'Користувач не знайдений' });

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) return done(err);
    if (!isMatch) return done(null, false, { message: 'Невірний пароль' });
    return done(null, user);
  });
}));

passport.serializeUser((user, done) => done(null, user.email));
passport.deserializeUser((email, done) => {
  const user = users.find(u => u.email === email);
  done(null, user || false);
});

// --- Helper middleware ---
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

// --- Routes ---

// Home page
app.get('/', (req, res) => {
  res.render('index', { user: req.user });
});

// Register
app.get('/register', (req, res) => res.render('register'));
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) return res.send('Користувач існує');

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.redirect('/login');
});

// Login
app.get('/login', (req, res) => res.render('login'));
app.post('/login', passport.authenticate('local', {
  successRedirect: '/protected',
  failureRedirect: '/login'
}));

// Logout
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

// Protected
app.get('/protected', ensureAuthenticated, (req, res) => {
  res.send(`
    <h1>Protected page</h1>
    <p>Hello, ${req.user.email}</p>
    <a href="/">Home</a> | <a href="/logout">Logout</a>
  `);
});

// 404
app.use((req, res) => {
  res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});