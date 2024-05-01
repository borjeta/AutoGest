const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/userRoute', require('./routes/userRoute'));
app.use('/propietarioRoute', require('./routes/propietarioRoute'));
app.use('/proveedorRoute', require('./routes/proveedorRoute'));
app.use('/reservaRoute', require('./routes/reservaRoute'));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


module.exports = app;

