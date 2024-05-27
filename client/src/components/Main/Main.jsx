import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import Client from './Client';
import ProtectedRoutes from "../../utils/ProtectedRoutes";
import RoleManager from "../../utils/RoleManager/RoleManager";
import Login from "./Login";

const Main = () => {
  const [logged, setLogged] = useState(false);
  const [role, setRole] = useState('');

  return (
    <main className="main">
      <Login logged={{ logged, setLogged }} role={{ role, setRole }} />
      <Routes>
        <Route path="/" element={logged ? <Home /> : <Navigate to="/" />} />
        <Route path="/admin/*" element={<ProtectedRoutes component={<RoleManager component={<AdminDashboard />} role={role} allowedRoles={["admin"]} />} logged={logged} />} />
        <Route path="/employee/*" element={<ProtectedRoutes component={<RoleManager component={<Client />} role={role} allowedRoles={["client"]} />} logged={logged} />} />
      </Routes>
    </main>
  );
};

export default Main;