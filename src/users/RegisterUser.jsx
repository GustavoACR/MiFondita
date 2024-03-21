import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { useCreateUserMutation } from "../api/OcsakApi";

function RegisterUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState();

  const [createUserMutation, { isSuccess, isLoading, isError, error }] =
    useCreateUserMutation();

  const options = ["ADMIN", "USER"];

  return (
    <form
      className="flex flex-col justify-center items-center gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        createUserMutation({
          newUser: {
            nombre: name,
            contraseña: password,
            rol: role,
          },
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

      <Autocomplete
        disablePortal
        className="w-[400px]"
        onChange={(_, event) => {
          setRole(event);
        }}
        sx={{ m: 1, minWidth: 250 }}
        options={options}
        renderInput={(params) => (
          <TextField
            variant="filled"
            required
            {...params}
            label="Rol de Usuario"
          />
        )}
      />

      <TextField
        label="Contraseña"
        className="w-[400px]"
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <Button variant="contained" color="success" type="submit" size="large">
        Registrar
      </Button>
    </form>
  );
}
export default RegisterUser;
