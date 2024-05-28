import React from "react";

const ProtectedRoutes = ({ component, logged }) => { //recibe componente y estado (true o falso)
    return (
        logged ? component : <div><span>Please log in first</span></div>
    )
};

export default ProtectedRoutes;