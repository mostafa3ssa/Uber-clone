const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoute = require('./routes/user.route');
const captainRoute = require('./routes/captain.route');
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
app.use('/captains', captainRoute);


module.exports = app; 