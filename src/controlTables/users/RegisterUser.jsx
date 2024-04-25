import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification";
import { useCreateUsuarioMutation } from "../../api/slices/UsuariosApiSlice";

function RegisterUser() {
    const [name, setName] = useState("");
    const [cellphoneNumber, setCellphoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("");
  
    const [createUsuarioMutation, { isSuccess, isLoading, isError, error }] =
    useCreateUsuarioMutation();

    const options = ["CLIENTE", "TRABAJADOR", "ADMIN"];
  
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
          createUsuarioMutation({
            newUsuario: {
              nombre: name,
              numero: cellphoneNumber,
              contraseña: password,
              rol: rol,
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
          label="Número de telefono"
          className="w-[400px]"
          required
          onChange={(e) => setCellphoneNumber(e.target.value)}
          value={cellphoneNumber}
        />
  
        <TextField
          label="Contraseña"
          className="w-[400px]"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {/* <TextField
          label="Rol"
          className="w-[400px]"
          required
          onChange={(e) => setRol(e.target.value)}
          value={rol}
        /> */}

        <Autocomplete
        disablePortal
        className="w-[400px]"
        onChange={(_, event) => {
          setRol(event);
        }}
        sx={{ m: 1, minWidth: 250 }}
        options={options}
        renderInput={(params) => (
          <TextField
            variant="filled"
            required
            {...params}
            label="Rol de usuario"
          />
        )}
        />
  
        <Button variant="contained" color="success" type="submit" size="large">
          Registrar
        </Button>
      </form>
    );
  }
  export default RegisterUser;
  