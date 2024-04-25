import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification";
import { useCreateComidaMutation } from "../../api/slices/ComidasApiSlice";

function RegisterComidas() {
    const [name, setName] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
  
    const [createComidaMutation, { isSuccess, isLoading, isError, error }] =
      useCreateComidaMutation();
  
    // const Authctx = useContext(AuthContext);
  
    useNotification("Se registró correctamente", [
      isSuccess,
      isLoading,
      isError,
      error,
    ]);
  
    return (
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          createComidaMutation({
            newComida: {
              nombre: name,
              precio: precio,
              descripcion: descripcion,
            },
            // token: Authctx.user.token,
          });
        }}
      >
  
        <TextField
          label="Nombre completo"
          className="w-[400px]"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <TextField
          label="Precio"
          className="w-[400px]"
          required
          onChange={(e) => setPrecio(e.target.value)}
          value={precio}
        />
  
        <TextField
          label="Descripcion"
          className="w-[400px]"
          required
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        />
  
        <Button variant="contained" color="success" type="submit" size="large">
          Registrar
        </Button>
      </form>
    );
  }
  export default RegisterComidas;