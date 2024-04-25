import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification";
import { useDeleteExtraMutation, useEditExtraMutation } from "../../api/slices/ExtrasApiSlice";

function DeleteEditExtras({ editedExtra, setEditedExtra }) {
  
    const [
      deleteExtraMutation,
      {
        isSuccess: isSuccessDelete,
        isLoading: isLoadingDelete,
        isError: isErrorDelete,
        error: errorDelete,
      },
    ] = useDeleteExtraMutation();
  
    const [
      editExtraMutation,
      {
        isSuccess: isSuccessEdit,
        isLoading: isLoadingEdit,
        isError: isErrorEdit,
        error: errorEdit,
      },
    ] = useEditExtraMutation();
  
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
          editExtraMutation({
            editedExtra: {
              id: editedExtra.id,
              nombre: editedExtra.completeName,
              precio: editedExtra.precio,
              descripcion: editedExtra.descripcion,
            },
          });
        }}
      >
  
        <TextField
          label="Nombre completo"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedExtra((prevState) => ({
              ...prevState,
              completeName: e.target.value,
            }));
          }}
          value={editedExtra?.completeName ?? ""}
        />

        <TextField
          label="Precio"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedExtra((prevState) => ({
              ...prevState,
              precio: e.target.value,
            }));
          }}
          value={editedExtra?.precio ?? ""}
        />

        <TextField
          label="Descripcion"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedExtra((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedExtra?.descripcion ?? ""}
        />
  
        <Button variant="contained" color="success" type="submit" size="large">
          Actualizar
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            deleteExtraMutation({
              id: editedExtra.id,
              // token: Authctx.user.token,
            });
          }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditExtras;
  