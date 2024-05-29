const pool = require("../config/db_pgsql.js");
const queries = require("../queries/info.queries.js"); // Queries SQL

/**
 * Encontrar clientes por DNI.
 *
 * @function getPersonalData
 * @param {string} dni - El DNI del cliente.
 * @return {Promise<string>} Los datos del cliente.
 */
// GET
const getPersonalData = async (dni) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getPersonalData, [dni]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) {
      client.release();
    }
  }
  return result;
};

const getServices = async (dni) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getServices, [dni]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) {
      client.release();
    }
  }
  return result;
};

const getInteractions = async (dni) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getInteractions, [dni]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) {
      client.release();
    }
  }
  return result;
};

const getContractedCampaigns = async (dni) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getContractedCampaigns, [dni]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) {
      client.release();
    }
  }
  return result;
};

// Get all users
const getUsers = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getUsers);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) {
      client.release();
    }
  }
  return result;
};

const user = {
  getPersonalData,
  getServices,
  getInteractions,
  getContractedCampaigns,
  getUsers,
};

module.exports = user;