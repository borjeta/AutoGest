const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/menu', (req, res) => {
    let { id, nombre, precio, descripcion } = req.body;
    let sql = `INSERT INTO menus (id, nombre, precio, descripcion) VALUES ('${id}', '${nombre}', '${precio}', '${descripcion}')`;
    connection.query(sql, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                connection.query(sql, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Internal server error' });
                        return;
                    }
                    res.status(200).send('Menú registrado con éxito');
                });
            }
        }
    });
}
);

router.get('/menus', (req, res) => {
    let sql = `SELECT * FROM menus`;
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
