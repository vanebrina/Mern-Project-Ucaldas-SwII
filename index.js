// Importacin del franwork expres para realizar solicitud http
const express = require('express');
const app = express();

//poder accerder a leer eel archivo .env
require("dotenv").config();
const PORT_URL = process.env.PORT || 3005;


app.listen(PORT_URL, () => {
    console.log(`server runing on port ${PORT_URL}`);
});