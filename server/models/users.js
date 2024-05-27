const pool = require('../config/db_pgsql'); // Conexión a BBDD 
const queries = require("../queries/usuarios.queries");

//POST USER
const signup = async (user) => {
    const { email, password, role } = user;
    let client, result;
    try {
      client = await pool.connect();
      const data = await client.query(queries.insertarUsuario, [
        email,
        password,
        role,
      ]);
      result = data.rowCount;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
  };

//PARA BUSCAR SI EXISTE UN USUARIO ANTES DE BORRARLO
const login = async (email, password) => {
    let client, result;
    try {
      client = await pool.connect();
      const data = await client.query(queries.loginUsuario, [email, password]);
      result = data.rows;
      console.log("Modelo: "+result);
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
  };

const getAllUsers = async () => {
    let client, result;
    try {
      client = await pool.connect();
      const data = await client.query(queries.mostrarUsuarios, []);
      result = data.rows;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
};

const userModels = {
    signup,
    login,
    getAllUsers
};


module.exports = userModels;