const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Usa ':memory:' para una base de datos en memoria o especifica un archivo para persistir

// Crear la tabla 'categorias'
db.run(CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT
);, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Tabla "categorias" creada o ya existe.');
    }
});

s
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conexión a la base de datos cerrada.');
});


