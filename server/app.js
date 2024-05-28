/**
 * @author Desafío de tripulaciones Grupo 2 
 */

require('dotenv').config();
require('./config/db_pgsql');

const express = require("express");
const path = require('path');
const cors = require('cors');
const helmet = require("helmet");


const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());

app.use(express.json()); // Para parsear el body de las peticiones
app.use(express.urlencoded({ extended: true }));

// Rutas
const usersRouter = require('./routes/users'); // Rutas de usuarios
const infoRouter = require('./routes/info.routes');
const resourcesRouter = require('./routes/resources'); // Rutas de recursos protegidos

// Middleware para servir la aplicación cliente en React
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware para permitir solicitudes CORS
app.use(cors());

/******RUTAS ******/

// API
app.use('/api/test', (req, res) => { res.status(200).json({ status: "connected" }) });
app.use('/api/info', infoRouter); // Rutas de usuarios
app.use('/api/users', usersRouter); // Rutas de usuarios
app.use('/api/resources', resourcesRouter); // Rutas de recursos protegidos

// Todas las peticiones que no sean a la API, redirigirán a la página principal
app.get("*", (req, res) => { 
  res.sendFile(path.join(__dirname, '../client/dist/index.html')) 
});

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).send("404 - Not Found");
});

// Middleware de error global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
