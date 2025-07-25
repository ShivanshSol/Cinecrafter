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
  res.render('landing', { showLoader: true, hideElement: true, href: '/auth' });
});
app.get('/auth', (req, res) => {
  res.render('auth', { showLoader: true });
});
app.get('/home', (req, res) => {
  res.render('home', { showLoader: true, hideElement: false });
});
app.get('/movies', (req, res) => {
  res.render('movies', { showLoader: true, hideElement: false });
});
app.get('/series', (req, res) => {
  res.render('series', { showLoader: true, hideElement: false });
});
app.get('/shows', (req, res) => {
  res.render('shows', { showLoader: true, hideElement: false });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).render('error', { errorCode: 404, message: "Page Not Found" });
});
// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { errorCode: 500, message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
