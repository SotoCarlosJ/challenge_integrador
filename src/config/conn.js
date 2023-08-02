const mysql = require('mysql2');
require('dotenv').config();

/* Creacion de un pool que admite hasta 10 conexion simultaneas */
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

/* Probando la conexion */
pool.getConnection((error, connection) => {
    if (error) console.error(error);
    else {
        console.log('Conexion exitosa a la Base de Datos ');
        connection.release();
    }
});

module.exports = {
    conn: pool.promise()
}
