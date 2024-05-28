import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {validateEmail, validatePassword} from "../../../utils/regex";
import UserImage from '../../../assets/user_azul.png';

const Login = ({ logged, role }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const navigate = useNavigate(); // Usar useNavigate en lugar de Redirect

  useEffect(() => {
    const testConnection = async () => {
      try {
        await axios.get('api/test');
      } catch (error) {
        console.log(error.message);
      }
    };
    testConnection();
  }, []);

  useEffect(() => {
    if (!validateEmail(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  }, [email]);

  useEffect(() => {
    if (!validatePassword(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowercase, uppercase, digit, and special character");
    } else {
      setPasswordMessage("");
    }
  }, [password]);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      const response = await axios.post('api/users/login', { email, password });
      const authHeader = response.headers.authorization;

      axios.defaults.headers.common['Authorization'] = authHeader;
      logged.setLogged(true);
      role.setRole(response.data.role);
      setMessage(`Authorisation Header ${authHeader}`);

      // Redirigir al usuario según su rol después de iniciar sesión correctamente
      if (response.data.role === "admin") {
        navigate("/admin"); // Utilizar navigate para redirigir al usuario
      } else if (response.data.role === "client") {
        navigate("/employee"); // Utilizar navigate para redirigir al usuario
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('api/users/logout');
      logged.setLogged(false);
      navigate("/"); // Redirigir a la raíz después del logout
    } catch (error) {
      console.log(error.message);
    }
  };

  if (logged.logged) {
    return <section className="logout-bar">
      <div className="agent">
        <img src={UserImage}></img>
        <h3>Andrea Smithson</h3>
        <p>Agente</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </section>

  }

  return (
    <div className="login-form">
      <h4>Login</h4>
      <input className="input-general" type="email" placeholder="email" onChange={handleEmail} />
      <input className="input-general" type="password" placeholder="password" onChange={handlePassword} />
      <a href="#">¿Has olvidado tu contraseña?</a>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
