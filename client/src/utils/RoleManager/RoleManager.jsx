import React from "react";

const RoleManager = ({ role, allowedRoles, component }) => { //recibe un rol, lista de roles y componente

  if (allowedRoles.includes(role)) { //si el rol pasado está incluido en los roles permitidos
    return component;
  }
  else {
    return <div><span>Unauthorized</span></div>
  }
};

export default RoleManager;
