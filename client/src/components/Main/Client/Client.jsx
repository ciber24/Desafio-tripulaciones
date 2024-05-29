import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home"

const Client = () => {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUserResources = async () => {
      try {
        const request = await axios({
          method: 'get',
          url: '/api/resources/protectedresource',
          withCredentials: true,
        });
        setMessage(request.data.msg);
      } catch (error) {
        console.log(error.message)
      }
    }
    getUserResources();

  }, [])

  return <div>
    <Home/>

    {message ? <h3>{message}</h3> : ""}

  </div>;
};

export default Client;
