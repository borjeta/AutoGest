const express = require('express');
var cors = require('cors');
const userRoute = require('./routes/userRoute');
const proveedorRoute = require('./routes/proveedorRoute');
const reservaRoute = require('./routes/reservaRoute');
const bodyParser = require('body-parser');
const propietariosRoute = require('./routes/propietariosRoute');

const connection = require('./connection');
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/userRoute', userRoute);
app.use('/proveedorRoute', proveedorRoute);
app.use('/reservaRoute', reservaRoute);
app.use('/propietariosRoute', propietariosRoute);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


module.exports = app;

