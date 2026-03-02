const express = require('express');
const cors = require('cors');

const berichtenRouter = require('./routes/berichten');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/berichten', berichtenRouter);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', gemeente: 'Zuidplas' }));

module.exports = app;
