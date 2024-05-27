const usersModels = require('../models/users');
const { createToken } = require('../config/jsonWebToken');


const signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        console.log("****", role);
        const newUser = await usersModels.signup(email, password, role)
        res.status(201).json({ msg: "Signed Up" }); // Creando usuario nuevo, el data que nos devuelve la peticion será este JSON
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersModels.login(email, password); // comprueba si existe el usuario
        console.log("controlador: ", user);
        
        if (user.length > 0) {
            const token = createToken({ email: user[0].email, role: user[0].role }); //se crea Token con email y rol del usuario
            console.log("controlador2: ", token);
            
            res.status(200)
                .set('Authorization', `Bearer ${token}`) // damos la respuesta con encabezado
                .cookie('access_token', token, { 
                    httpOnly: true, 
                    secure: process.env.NODE_ENV === 'production', // Asegúrate de que solo se envíen cookies seguras en producción
                    sameSite: 'strict' 
                }) // creamos la cookie con el token
                .json({ role: user[0].role }); //cuerpo de la respuesta, el rol del usuario
        } else {
            res.status(400).json({ msg: "wrong credentials" });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};


const logout = async (req, res) => {
    try {
        res.status(200)
            .set('Authorization', "")
            .cookie('access_token', "")
            .send();
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await usersModels.getAllUsers();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const users = {
    signup,
    login,
    logout,
    getAllUsers
};


module.exports = users;