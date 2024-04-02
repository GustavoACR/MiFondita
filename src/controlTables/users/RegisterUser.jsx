import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import useNotification from "../../hooks/useNotification";

function RegisterUser() {
    const [name, setName] = useState("");
    const [cellphoneNumber, setCellphoneNumber] = useState("");
    const [password, setPassword] = useState("");
  
    // const [createUserMutation, { isSuccess, isLoading, isError, error }] =
    //   useCreateUserMutation();
  
    // const Authctx = useContext(AuthContext);
  
    // useNotification("Se registró correctamente", [
    //   isSuccess,
    //   isLoading,
    //   isError,
    //   error,
    // ]);
  
    return (
      <form
        className="flex flex-col justify-center items-center gap-4"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   createUserMutation({
        //     newUser: {
        //       groupId: group,
        //       employeeNumber: employeeNumber,
        //       completeName: name,
        //       job: job,
        //       roleId: role,
        //       password: password,
        //     },
        //     token: Authctx.user.token,
        //   });
        // }}
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
  
        <Button variant="contained" color="success" type="submit" size="large">
          Registrar
        </Button>
      </form>
    );
  }
  export default RegisterUser;
  