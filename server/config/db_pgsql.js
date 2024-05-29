const {Pool} =require('pg');

const pool = new Pool({
    host: process.env.DB__HOST,
    ssl: true, //Protocolo necesario para el despliegue en render
    port: process.env.DB__PORT,
    user: process.env.DB__USER,
    database: process.env.DB__DATABASE,
    password: process.env.DB__PASSWORD,
})

module.exports = pool;