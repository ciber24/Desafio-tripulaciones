import React, { useState, useEffect } from "react";
import axios from 'axios';
import { validateEmail, validatePassword } from "../../../utils/regex"; //validacion de email y password 

const AdminDashboard = () => {

  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [perfil, setPerfil] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [status, setStatus] = useState("active");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const request = await axios({
          method: 'get',
          url: 'api/test',
        })
      } catch (error) {
        console.log(error.message);
      }
    }
    testConnection();
  }, [])

  useEffect(() => {
    if (!validateEmail(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  }, [email])

  useEffect(() => {
    if (!validatePassword(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowecase, uppercase, digit and special character");
    } else {
      setPasswordMessage("");
    }
  }, [password])

  const handleNombre = (e) => setNombre(e.target.value);
  const handleApellidos = (e) => setApellidos(e.target.value);
  const handlePerfil = (e) => setPerfil(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRole = (e) => setRole(e.target.value);


  const handleGetUsers = async () => { //muestra todos los usuarios
    try {
      const request = await axios.get('api/users/all');
      /*  const request = await axios({
         method: 'get',
         url: '/api/users/all'
       }); */
      console.log("AdminBoard", request);
      setUsers(request.data);
      console.log("AdminBoard2", request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClean = () => {
    setUsers([]);
  };

  const handleSignUp = async () => {
    try {
      //para evitar poner la ruta completa HTTP:\\....se añade en el package Json la linea "PROXY" y esta ruta va al index.js principal
      const request = await axios.post('api/users/signup', { nombre, apellidos, perfil, email, password, role, status });
      setMessage(request.data.msg);
      alert("Empleado Registrado");
    } catch (error) {
      console.log(error.message);
    }
  };

  const revokeAccess = async () => {
    try {
      console.log("AdminRevoke", users[0].id_agente);
      const id = users[0].id_agente;
      //para evitar poner la ruta completa HTTP:\\....se añade en el package Json la linea "PROXY" y esta ruta va al index.js principal
      const request = await axios.put('api/users/revokeaccess', { id });
      console.log("AdminRevoke2", email);
      setMessage(request.data.msg);
      alert("Empleado Desautorizado");
    } catch (error) {
      console.log(error.message);
    }
  };

  const printUsers = (users) => {
    return users.map((user, i) => {
      return <ul key={[i]}>
        <li>Nombre: {user.nombre}</li>
        <li>Apellidos: {user.apellidos}</li>
        <li>Perfil: {user.perfil}</li>
        <li>Email: {user.email}</li>
        <li>Rol: {user.role}</li>
        <li>Status: {user.status}</li>
        <button onClick={revokeAccess}>Revoke Access</button><br /><br /><br />
      </ul>
    })
  }

  return <div>
    <h2>Admin Dashboard</h2>
    <frameset>
       <frame src='https://desafiotripulacionesds.streamlit.app/?embedded=true' />
    </frameset>

    <div className="sign-form">
      <h3>Alta Empleado</h3>
      <input type="text" placeholder="nombre" name="nombre" onChange={handleNombre} /><br />
      <input type="text" placeholder="apellidos" name="apellidos" onChange={handleApellidos} /><br />
      <input type="text" placeholder="perfil" name="perfil" onChange={handlePerfil} /><br />
      <input type="email" placeholder="email" name="email" onChange={handleEmail} /><br />
      {emailMessage ? <span>{emailMessage}</span> : ""}
      <input type="password" placeholder="password" name="password" onChange={handlePassword} /><br />
      {passwordMessage ? <span>{passwordMessage}</span> : ""}
      <select value={role} name="role" onChange={handleRole} >
        <option value="client">Employee</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignUp}>Sign Up</button><br /><br />
    </div>

    <button onClick={handleGetUsers}>Get All Users</button>
    <button onClick={handleClean}>Clean</button>

    {printUsers(users)}

  </div>;
};

export default AdminDashboard;
