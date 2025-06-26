const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Something went wrong', details: err.message });
});

module.exports = app;