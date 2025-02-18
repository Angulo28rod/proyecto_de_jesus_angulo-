// routes/categorias.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las categorías
router.get('/', (req, res) => {
    db.all('SELECT * FROM categorias', (err, rows) => {
        if (err) throw err;
        res.render('categorias', { categorias: rows });
    });
});

// Agregar una nueva categoría
router.post('/add', (req, res) => {
    const { categoria } = req.body;
    db.run('INSERT INTO categorias (categoria) VALUES (?)', [categoria], (err) => {
        if (err) throw err;


                res.redirect('/categorias');
    });
});

// Agregar más rutas para editar y eliminar categorías...

module.exports = router;
