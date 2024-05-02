const express = require('express');
const connection = require('../connection');
const router = express.Router();


router.post('/login', (req, res) => {
    let { email, password } = req.body;

    let sql = `SELECT * FROM autogest.users WHERE email = '${email}' AND password = '${password}'`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({
                error: 'Internal server error',
                detalles: err
            });
            return;
        }
        if (result.length === 0) {
            res.status(401).json({
                error: 'Incorrect email or password',
                detalles: err
            });
            return;
        }

        if (result.length > 0) {
            res.status(200).json({
                message: 'Login successful',
                user: result[0],
            });
            return;
        }

    });

});

router.post('/register', (req, res) => {
    let { username, password } = req.body;
    let sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
    connection.query(sql, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                connection.query(sql, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Internal server error' });
                        return;
                    }
                    res.status(200).send('User registered successfully');
                });
            }
        }
    });
});

router.post('/register', (req, res) => {
    let { username, password } = req.body;
    let sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
    connected.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        res.status(200).send('User registered successfully');
    });
});

router.get('/users', (req, res) => {
    let sql = `SELECT * FROM users`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json(result);
    });
});


module.exports = router;