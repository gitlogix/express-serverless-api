const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(['/', '/health'], (req, res) => {
	res.send('API Health is fine!');
});

app.get('/api/info', (req, res) => {
	res.send({ application: 'express-serverless-api', version: '1.0.0' });
});

app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

module.exports = app;
