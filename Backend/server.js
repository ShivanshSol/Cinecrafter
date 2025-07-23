const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv');

// Load .env config
env.config();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.get('/', (req, res) => {
  res.render('landing', { showLoader: false });
});
app.get('/auth', (req, res) => {
  res.render('auth', { showLoader: true });
});
app.get('/home', (req, res) => {
  res.render('home', { showLoader: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
