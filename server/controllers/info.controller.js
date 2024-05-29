const user = require('../models/info.model.js'); // Importar el modelo de la BBDD


// GET http://localhost:3000/api/user/datosPersonales?dni=87654321B
const getPersonalData = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getPersonalData(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

// GET http://localhost:3000/api/user/servicios?dni=13579246C
const getServices = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getServices(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

// GET http://localhost:3000/api/user/interacciones?dni=13579246C
const getInteractions = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getInteractions(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

// GET http://localhost:3000/api/user/contratos?dni=13579246C
const getContractedCampaigns = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getContractedCampaigns(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

const getUsers = async (req, res) => {
    const users = await user.getUsers();
    res.status(200).json(users);
}


module.exports = {
    getPersonalData,
    getServices,
    getInteractions,
    getContractedCampaigns,
    getUsers,
}