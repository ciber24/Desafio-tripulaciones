/**
 * @author Desafío de tripulaciones Grupo 2  
 * @exports routes 
 * @namespace routes 
 */

const express = require('express');
const userController = require("../controllers/info.controller");
const router = express.Router();

router.get('/datosPersonales', userController.getPersonalData);
router.get('/servicios', userController.getServices);
router.get('/interacciones', userController.getInteractions);
router.get('/contratos', userController.getContractedCampaigns);
router.get('/all', userController.getUsers);
router.get('/avisos', userController.getAvisos);

router.put('/sevicios', userController.getAvisos);

module.exports = router;