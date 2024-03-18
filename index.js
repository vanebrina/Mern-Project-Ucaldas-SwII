// Importacin del franwork expres para realizar solicitud http
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/user_routes.js');
//bodyparser es un middleware de express
//que parsea el cuerpo de las solicitudes entrantes
//en formato JSON, multipartes y lo convierte en un objeto java Script
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//poder accerder a leer eel archivo .env
require("dotenv").config();
const PORT_URL = process.env.PORT || 3005;

app.listen(PORT_URL, () => {
    console.log(`server runing on port ${PORT_URL}`);
    mongo_connect();
});

const mongo_connect = () => {
    try {
        mongoose
            .connect(process.env.DATABASE_CONNECTION_STRING)
            .then(() => {
                console.log("Connected to MongoDB");
            })
            .catch ((err) => {
                console.log("Connected error in the bd");
            });
    } catch (err) {
        console.log(err);
    };
};

//rutas
app.use('/api/v1/users', userRoutes);