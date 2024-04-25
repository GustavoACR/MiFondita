import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification";
import { useDeleteDesayunoMutation, useEditDesayunoMutation } from "../../api/slices/DesayunosApiSlice";

function DeleteEditDesayunos({ editedDesayuno, setEditedDesayuno }) {
  
    const [
      deleteDesayunoMutation,
      {
        isSuccess: isSuccessDelete,
        isLoading: isLoadingDelete,
        isError: isErrorDelete,
        error: errorDelete,
      },
    ] = useDeleteDesayunoMutation();
  
    const [
      editDesayunoMutation,
      {
        isSuccess: isSuccessEdit,
        isLoading: isLoadingEdit,
        isError: isErrorEdit,
        error: errorEdit,
      },
    ] = useEditDesayunoMutation();
  
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
          editDesayunoMutation({
            editedDesayuno: {
              id: editedDesayuno.id,
              nombre: editedDesayuno.completeName,
              precio: editedDesayuno.precio,
              descripcion: editedDesayuno.descripcion,
            },
          });
        }}
      >
  
        <TextField
          label="Nombre completo"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedDesayuno((prevState) => ({
              ...prevState,
              completeName: e.target.value,
            }));
          }}
          value={editedDesayuno?.completeName ?? ""}
        />

        <TextField
          label="Precio"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedDesayuno((prevState) => ({
              ...prevState,
              precio: e.target.value,
            }));
          }}
          value={editedDesayuno?.precio ?? ""}
        />

        <TextField
          label="Descripcion"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedDesayuno((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedDesayuno?.descripcion ?? ""}
        />
  
        <Button variant="contained" color="success" type="submit" size="large">
          Actualizar
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            deleteDesayunoMutation({
              id: editedDesayuno.id,
              // token: Authctx.user.token,
            });
          }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditDesayunos;
  