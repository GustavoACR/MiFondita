import { Autocomplete, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import useNotification from "../../hooks/useNotification";


function DeleteEditUsers({ editedUser, setEditedUser }) {
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
  
    // const [
    //   deleteUserMutation,
    //   {
    //     isSuccess: isSuccessDelete,
    //     isLoading: isLoadingDelete,
    //     isError: isErrorDelete,
    //     error: errorDelete,
    //   },
    // ] = useDeleteUserMutation();
  
    // const [
    //   editUserMutation,
    //   {
    //     isSuccess: isSuccessEdit,
    //     isLoading: isLoadingEdit,
    //     isError: isErrorEdit,
    //     error: errorEdit,
    //   },
    // ] = useEditUserMutation();
  
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
  
    // useNotification("Se eliminó correctamente", [
    //   isSuccessDelete,
    //   isLoadingDelete,
    //   isErrorDelete,
    //   errorDelete,
    // ]);
  
    // useNotification("Se actualizó correctamente", [
    //   isSuccessEdit,
    //   isLoadingEdit,
    //   isErrorEdit,
    //   errorEdit,
    // ]);
  
    // useNotification("Se actualizó correctamente", [
    //   isSuccessWithoutPassword,
    //   isLoadingWithoutPassword,
    //   isErrorWithoutPassword,
    //   errorWithoutPassword,
    // ]);
  
    return (
      <form
        className="flex flex-col justify-center items-center gap-4"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   checked === true
        //     ? editUserMutation({
        //         editedUser: {
        //           id: editedUser.id,
        //           groupId: editedUser.groupId,
        //           employeeNumber: editedUser.employeeNumber,
        //           completeName: editedUser.completeName,
        //           job: editedUser.job,
        //           roleId: editedUser.roleId,
        //           password: password,
        //         },
        //         token: Authctx.user.token,
        //       })
        //     : checked === false
        //     ? editUserWithoutPasswordMutation({
        //         editedUser: {
        //           id: editedUser.id,
        //           groupId: editedUser.groupId,
        //           employeeNumber: editedUser.employeeNumber,
        //           completeName: editedUser.completeName,
        //           job: editedUser.job,
        //           roleId: editedUser.roleId,
        //         },
        //         token: Authctx.user.token,
        //       })
        //     : null;
        // }}
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
        //   onClick={() => {
        //     deleteUserMutation({
        //       id: editedUser.id,
        //       token: Authctx.user.token,
        //     });
        //   }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditUsers;
  