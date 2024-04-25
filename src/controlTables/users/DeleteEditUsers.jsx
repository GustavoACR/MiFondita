import { Autocomplete, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification";
import { useDeleteUsuarioMutation, useEditUsuarioMutation } from "../../api/slices/UsuariosApiSlice";

function DeleteEditUsers({ editedUser, setEditedUser }) {
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const options = ["CLIENTE", "TRABAJADOR", "ADMIN"];
    const [
      deleteUsuarioMutation,
      {
        isSuccess: isSuccessDelete,
        isLoading: isLoadingDelete,
        isError: isErrorDelete,
        error: errorDelete,
      },
    ] = useDeleteUsuarioMutation();
  
    const [
      editUsuarioMutation,
      {
        isSuccess: isSuccessEdit,
        isLoading: isLoadingEdit,
        isError: isErrorEdit,
        error: errorEdit,
      },
    ] = useEditUsuarioMutation();
  
    // const [
    //   editUserWithoutPasswordMutation,
    //   {
    //     isSuccess: isSuccessWithoutPassword,
    //     isLoading: isLoadingWithoutPassword,
    //     isError: isErrorWithoutPassword,
    //     error: errorWithoutPassword,
    //   },
    // ] = useEditUserWithoutPasswordMutation();
  
    // const Authctx = useContext(AuthContext);
  
    useNotification("Se eliminó correctamente", [
      isSuccessDelete,
      isLoadingDelete,
      isErrorDelete,
      errorDelete,
    ]);
  
    useNotification("Se actualizó correctamente", [
      isSuccessEdit,
      isLoadingEdit,
      isErrorEdit,
      errorEdit,
    ]);
  
    // useNotification("Se actualizó correctamente", [
    //   isSuccessWithoutPassword,
    //   isLoadingWithoutPassword,
    //   isErrorWithoutPassword,
    //   errorWithoutPassword,
    // ]);
  
    return (
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          editUsuarioMutation({
            editedUser: {
              id: editedUser.id,
              nombre: editedUser.completeName,
              numero: editedUser.numero,
              password: editedUser.password,
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
              completeName: e.target.value,
            }));
          }}
          value={editedUser?.completeName ?? ""}
        />

        <TextField
          label="Número de telefono"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedUser((prevState) => ({
              ...prevState,
              cellphoneNumber: e.target.value,
            }));
          }}
          value={editedUser?.cellphoneNumber ?? ""}
        />

        <Autocomplete
        disablePortal
        className="w-[400px]"
        onChange={(_, e) => {
          setEditedUser((prevState) => ({
            ...prevState,
            job: e,
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
            label="Puesto del empleado"
          />
        )}
        />
  
        <FormControlLabel
          label="Desea actualizar la contraseña"
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          }
        />
  
        {checked === true ? (
          <TextField
            label="Contraseña"
            className="w-[400px]"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        ) : null}
  
        <Button variant="contained" color="success" type="submit" size="large">
          Actualizar
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            deleteUsuarioMutation({
              id: editedUser.id,
              // token: Authctx.user.token,
            });
          }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditUsers;
  