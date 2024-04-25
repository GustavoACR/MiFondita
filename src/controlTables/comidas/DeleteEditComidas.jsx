import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification";
import { useDeleteComidaMutation, useEditComidaMutation } from "../../api/slices/ComidasApiSlice";

function DeleteEditComidas({ editedComida, setEditedComida }) {
  
    const [
      deleteComidaMutation,
      {
        isSuccess: isSuccessDelete,
        isLoading: isLoadingDelete,
        isError: isErrorDelete,
        error: errorDelete,
      },
    ] = useDeleteComidaMutation();
  
    const [
      editComidaMutation,
      {
        isSuccess: isSuccessEdit,
        isLoading: isLoadingEdit,
        isError: isErrorEdit,
        error: errorEdit,
      },
    ] = useEditComidaMutation();
  
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
          editComidaMutation({
            editedComida: {
              id: editedComida.id,
              nombre: editedComida.completeName,
              precio: editedComida.precio,
              descripcion: editedComida.descripcion,
            },
          });
        }}
      >
  
        <TextField
          label="Nombre completo"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedComida((prevState) => ({
              ...prevState,
              completeName: e.target.value,
            }));
          }}
          value={editedComida?.completeName ?? ""}
        />

        <TextField
          label="Precio"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedComida((prevState) => ({
              ...prevState,
              precio: e.target.value,
            }));
          }}
          value={editedComida?.precio ?? ""}
        />

        <TextField
          label="Descripcion"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedComida((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedComida?.descripcion ?? ""}
        />
  
        <Button variant="contained" color="success" type="submit" size="large">
          Actualizar
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            deleteComidaMutation({
              id: editedComida.id,
              // token: Authctx.user.token,
            });
          }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditComidas;
  