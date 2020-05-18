require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const requireAuth = require('./middlewares/requireAuth');

const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = process.env.MONGO_URI
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo Instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error occured connection to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your mail : ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('3000 포트 서버 설정.');
})