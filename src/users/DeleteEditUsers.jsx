  import {Autocomplete,Button,Checkbox,FormControlLabel,TextField} from "@mui/material";
  import React, { useContext, useState } from "react";
  import { useDeleteUserMutation } from "../api/OcsakApi";
  import { useEditUserMutation } from "../api/OcsakApi";
  
  function DeleteEditUsers({ editedUser, setEditedUser }) {
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
  
    const [
      deleteUserMutation,
      {
        isSuccess: isSuccessDelete,
        isLoading: isLoadingDelete,
        isError: isErrorDelete,
        error: errorDelete,
      },
    ] = useDeleteUserMutation();
  
    const [
      editUserMutation,
      {
        isSuccess: isSuccessEdit,
        isLoading: isLoadingEdit,
        isError: isErrorEdit,
        error: errorEdit,
      },
    ] = useEditUserMutation();
  
    const options = ["ADMIN", "USER"];
    return (
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          editUserMutation({
            editedUser: {
              id: editedUser.id,
              nombre: editedUser.nombre,
              contraseña: editedUser.contraseña,
              rol: editedUser.rol,
            },
          });
        }}
      >
  
        <TextField
          label="Nombre completo"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedUser((prevState) => ({
              ...prevState,
              nombre: e.target.value,
            }));
          }}
          value={editedUser?.nombre ?? ""}
        />
  
        <Autocomplete
          disablePortal
          className="w-[400px]"
          onChange={(_, e) => {
            setEditedUser((prevState) => ({
              ...prevState,
              rol: e,
            }));
          }}
          value={editedUser?.rol ?? ""}
          sx={{ m: 1, minWidth: 250 }}
          options={options}
          renderInput={(params) => (
            <TextField
              variant="filled"
              required
              {...params}
              label="Rol del Usuario"
            />
          )}
        />

        <TextField
          label="Contraseña"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedUser((prevState) => ({
              ...prevState,
              contraseña: e.target.value,
            }));
          }}
          value={editedUser?.contraseña ?? ""}
        />
  
        <Button variant="contained" color="success" type="submit" size="large">
          Actualizar
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            deleteUserMutation({
              id: editedUser.id,
            });
          }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditUsers;
  