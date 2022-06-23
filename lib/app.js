const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/flowers', require('./controllers/flowers'));
app.use('/fruits', require('./controllers/fruits'));
app.use('/veggies', require('./controllers/veggies'));
app.use('/trees', require('./controllers/trees'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
