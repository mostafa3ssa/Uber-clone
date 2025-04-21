const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoute = require('./routes/user.route');
const cookieParser = require('cookie-parser');

connectToDb();

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/users', userRoute);

module.exports = app; 