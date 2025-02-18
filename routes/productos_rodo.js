


// routes/productos.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los productos
router.get('/', (req, res) => {
    db.all('SELECT * FROM productos_rodo', (err, rows) => {
        if (err) throw err;
        res.render('productos_rodo', { productos: rows });
    });
});


  router.post('/add', (req, res) => {
    const { codigo, producto, categoria_id, existencia_actual, precio } = req.body;
    db.run('INSERT INTO productos_rodo (codigo, producto, categoria_id, existencia_actual, precio) VALUES (?, ?, ?, ?, ?)', 
        [codigo, producto, categoria_id, existencia_actual, precio], 
        (err) => {
            if (err) throw err;
            res.redirect('/productos_rodo');
        });
});

// Agregar más rutas para editar y eliminar productos...

module.exports = router;
