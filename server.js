//dependencias
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = process.env.CONNECTION_STRING;
const client = mysql.createPool(connection);
const cors = require("cors");



app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//rotas
const loginRoute = require('./routes/login.js');
const prestacaoRoute = require('./routes/prestacao');
const registerRoute = require('./routes/register.js');

app.use('/login', loginRoute);
app.use('/prestacao', prestacaoRoute);
app.use('/register', registerRoute);

app.listen(3001, () => {
    console.log('http://localhost:3001');
})
