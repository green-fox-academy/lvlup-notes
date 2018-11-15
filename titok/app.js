const express = require('express');
const app = express();
const guard = require('./guard');

const hello = 'hello';
const titok = 'verysecuretitok';

app.use(guard);



app.get('/', (req, res) => {
    res.json({ hello });
});

app.get('/admin/titok', (req, res) => {
    res.json({ titok });
});

module.exports = app;
