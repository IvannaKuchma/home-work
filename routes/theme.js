// routes/theme.js
const express = require('express');
const router = express.Router();

// Збереження теми у cookies
router.post('/set', (req, res) => {
  const { theme } = req.body;
  if (!theme) {
    return res.status(400).send('Theme is required');
  }

  // Записуємо cookie з вибраною темою
  res.cookie('theme', theme, {
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 рік
    httpOnly: false, // можна читати на клієнті (не обов’язково)
    sameSite: 'lax',
    path: '/'
  });

  // Повертаємось на головну
  res.redirect('/');
});

module.exports = router;
