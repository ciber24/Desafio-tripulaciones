import React, { useState, useEffect } from "react";
import axios from 'axios';

const AdminDashboard = () => {

  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
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
        console.log(request.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    testConnection();
  }, [])

  useEffect(() => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailValidation.test(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  }, [email])

  useEffect(() => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/
    if (!passwordValidation.test(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowecase, uppercase, digit and special character");
    } else {
      setPasswordMessage("");
    }
  }, [password])

  const handleNombre = (e) => setNombre(e.target.value);
  const handleApellidos = (e) => setApellidos(e.target.value);
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
      console.log(request);
      setUsers(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClean = () => {
    setUsers([]);
  };

  /*   const handleSignUp = async () => {
      try {
        console.log("ROLE SENDING", role);
        console.log("PASS SENDING", password);
        console.log("EMAIL SENDING", email);
        const request = await axios({
          method: 'post',
          url: 'api/users/signup', //para evitar poner la ruta completa HTTP:\\....se añade en el package Json la linea "PROXY" y esta ruta va al index.js principal
          data: { email, password, role }
        });
        console.log(request.data);
        setMessage(request.data.msg);
      } catch (error) {
        console.log(error.message)
      }
    }; */

  const handleSignUp = async () => {
    try {
      console.log("NAME SENDING", nombre);
      console.log("LAST SENDING", apellidos);
      console.log("EMAIL SENDING", email);
      console.log("PASS SENDING", password);
      console.log("ROLE SENDING", role);
      const request = await axios.post('api/users/signup', { nombre, apellidos, email, password, role });
      setMessage(request.data.msg);
      console.log("handleSignUp"+request);
    } catch (error) {
      console.log(error.message);
    }
  };


  const printUsers = (users) => {
    console.log("AdminDasboard " + users);
    return users.map((user, i) => {
      return <ul key={[i]}>
        <li>Name: {user.nombre}</li>
        <li>Apellidos: {user.apellidos}</li>
        <li>Email: {user.email}</li>
        <li>Rol: {user.role}</li>
        {/* <li>Created: {user.createdAt}</li> */}
      </ul>
    })
  }

  return <div>
    <h2>Admin Dashboard</h2>

    <div className="sign-form">
      <h3>Alta Empleado</h3>
      <input type="text" placeholder="nombre" onChange={handleNombre} /><br />
      <input type="text" placeholder="apellidos" onChange={handleApellidos} /><br />
      <input type="email" placeholder="email" onChange={handleEmail} /><br />
      {emailMessage ? <span>{emailMessage}</span> : ""}
      <input type="password" placeholder="password" onChange={handlePassword} /><br />
      {passwordMessage ? <span>{passwordMessage}</span> : ""}
      <select value={role} onChange={handleRole} >
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
