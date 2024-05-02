const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/propietario', (req, res) => {
    let { id, nombre, telefono, email, direccion } = req.body;
    let sql = `INSERT INTO propietarios (id, nombre, telefono, email, direccion) VALUES ('${id}', '${nombre}', '${telefono}', '${email}', '${direccion}')`;
    connection.query(sql, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                connection.query(sql, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Internal server error' });
                        return;
                    }
                    res.status(200).send('Propietario registrado con éxito');
                });
            }
        }
    });
}
);

router.get('/propietarios', (req, res) => {
    let sql = `SELECT * FROM propietarios`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json(result);
    });
});

module.exports = router;
