// Importacin del franwork expres para realizar solicitud http
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

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
                console.log("lbs");
            });
    } catch (err) {
        console.log(err);
    };
};

mongo_connect();