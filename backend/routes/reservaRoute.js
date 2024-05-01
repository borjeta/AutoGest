const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/reserva', (req, res) => {
    let { id, fecha, hora, id_usuario, id_sala } = req.body;
    let sql = `INSERT INTO reserva (id, fecha, hora, id_usuario, id_sala) VALUES ('${id}', '${fecha}', '${hora}', '${id_usuario}', '${id_sala}')`;
    connection.query(sql, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                connection.query(sql, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Internal server error' });
                        return;
                    }
                    res.status(200).send('Reserva realizada con éxito');
                });
            }
        }
    });
});

router.get('/reservas', (req, res) => {
    let sql = `SELECT * FROM reserva`;
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
