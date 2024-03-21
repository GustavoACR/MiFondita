import React, { useState } from "react";
import server from "../server.json";
import toast from "react-hot-toast";

export const Context = React.createContext({
  authenticated: false,
  token: "",
  login: (nombre, contraseña) => {},
  logout: () => {},
  user: {
    id: 0,
    nombre: "",
    role: "",
  },
});

function ContextProvider(props) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState({
        id: 0,
        nombre: "",
        rol: "",
    });
  const login = async (nombre, contraseña) => {
    const credentials = {
      nombre: nombre,
      contraseña: contraseña,
    };
    toast.promise(
      fetch(`${server.url}/Login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }),
      {
        loading: "Iniciando sesión...",
        success: (data) => {
          if (!data.ok) throw new Error("Usuario o contraseña incorrecto.");
          if (data === "User not found")
            throw new Error("Este usuario no existe.");
          if (data === "Invalid username or password")
            throw new Error("Usuario o contraseña incorrecto.");
          if (data === undefined) throw new Error("Error del servidor");
          data.json().then((loginResponse) => {
            setUser(loginResponse);
            setToken(true);
            console.log(loginResponse);
          });
          return `Bienvenid@`;
        },
      }
    );
  };

  const logout = () => {
    toast.loading("Cerrando sesión");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const values = {
    authenticated: token,
    login,
    logout,
    user,
  };

  return (
    <Context.Provider value={values}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;