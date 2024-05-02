const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/plato', (req, res) => {
    let { id, nombre, precio, descripcion } = req.body;
    let sql = `INSERT INTO platos (id, nombre, precio, descripcion) VALUES ('${id}', '${nombre}', '${precio}', '${descripcion}')`;
    connection.query(sql, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                connection.query(sql, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Internal server error' });
                        return;
                    }
                    res.status(200).send('Plato registrado con éxito');
                });
            }
        }
    });
}
);

router.get('/platos', (req, res) => {
    let sql = `SELECT * FROM platos`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json(result);
    });
}
);

module.exports = router;
