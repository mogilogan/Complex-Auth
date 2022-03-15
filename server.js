<<<<<<< HEAD
require('dotenv').config({path: "./config.env"});
const express = require('express');

const app = express();


app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

=======
require('dotenv').config({path: "./config.env"});
const express = require('express');

const app = express();


app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

>>>>>>> 8a9d2eb1c84c9240b37b1b38031781a1d9ee28c8
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));