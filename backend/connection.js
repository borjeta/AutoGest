const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db', err);
        return;
    }
    console.log('Connection established');
}
);

module.exports = connection;

