const express = require('express');
const usersRouter = express.Router();
const users = require('../controllers/users');
const getAccessToken = require('../middlewares/getAccessToken');
const decodeToken = require('../middlewares/decodeToken');
const adminRoutes = require('../middlewares/adminRoutes');


usersRouter.post('/signup', users.signup); 
usersRouter.post('/login', users.login); //va a controlador
usersRouter.get('/logout', users.logout);
usersRouter.get('/all', getAccessToken, decodeToken, adminRoutes, users.getAllUsers); //middlewares
// 1.- comprueba encabezado y Token y devuelve el Token
// 2.- ese Token se descodifica con jwt y lo guardamos
// 3.- se comprueba el rol
// 4.- devuelve los usuarios como un JSON

module.exports = usersRouter;