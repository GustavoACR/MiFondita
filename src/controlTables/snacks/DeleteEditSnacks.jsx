import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification";
import { useDeleteSnackMutation, useEditSnackMutation } from "../../api/slices/SnacksApiSlice";

function DeleteEditSnacks({ editedSnack, setEditedSnack }) {
  
    const [
      deleteSnackMutation,
      {
        isSuccess: isSuccessDelete,
        isLoading: isLoadingDelete,
        isError: isErrorDelete,
        error: errorDelete,
      },
    ] = useDeleteSnackMutation();
  
    const [
      editSnackMutation,
      {
        isSuccess: isSuccessEdit,
        isLoading: isLoadingEdit,
        isError: isErrorEdit,
        error: errorEdit,
      },
    ] = useEditSnackMutation();
  
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
          editSnackMutation({
            editedSnack: {
              id: editedSnack.id,
              nombre: editedSnack.completeName,
              precio: editedSnack.precio,
              descripcion: editedSnack.descripcion,
            },
          });
        }}
      >
  
        <TextField
          label="Nombre completo"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedSnack((prevState) => ({
              ...prevState,
              completeName: e.target.value,
            }));
          }}
          value={editedSnack?.completeName ?? ""}
        />

        <TextField
          label="Precio"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedSnack((prevState) => ({
              ...prevState,
              precio: e.target.value,
            }));
          }}
          value={editedSnack?.precio ?? ""}
        />

        <TextField
          label="Descripcion"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedSnack((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedSnack?.descripcion ?? ""}
        />
  
        <Button variant="contained" color="success" type="submit" size="large">
          Actualizar
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            deleteSnackMutation({
              id: editedSnack.id,
              // token: Authctx.user.token,
            });
          }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditSnacks;
  