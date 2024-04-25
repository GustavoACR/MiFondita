import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import useNotification from "../../hooks/useNotification"
import { useDeletePedidoMutation } from "../../api/OcsakApi";


function DeleteEditPedidos({ editedPedido, setEditedPedido }) {
  
    const [
      deletePedidoMutation,
      {
        isSuccess: isSuccessDelete,
        isLoading: isLoadingDelete,
        isError: isErrorDelete,
        error: errorDelete,
      },
    ] = useDeletePedidoMutation();
  
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
  
    useNotification("Se eliminó correctamente", [
      isSuccessDelete,
      isLoadingDelete,
      isErrorDelete,
      errorDelete,
    ]);
  
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
      >
  {/* Platillos, cliente, numero, comerllevarrecoger, precio, estado */}
        <TextField
          label="Platillos"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedPedido((prevState) => ({
              ...prevState,
              completeName: e.target.value,
            }));
          }}
          value={editedPedido?.platillos ?? ""}
        />

        <TextField
          label="Cliente"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedPedido((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedPedido?.cliente ?? ""}
        />

        <TextField
          label="Telefono"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedPedido((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedPedido?.numero ?? ""}
        />

        <TextField
          label="Tipo de pedido"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedPedido((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedPedido?.tipoPedido ?? ""}
        />

        <TextField
          label="Precio"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedPedido((prevState) => ({
              ...prevState,
              precio: e.target.value,
            }));
          }}
          value={editedPedido?.precio ?? ""}
        />

        {/* <TextField
          label="Estado"
          className="w-[400px]"
          required
          onChange={(e) => {
            setEditedPedido((prevState) => ({
              ...prevState,
              descripcion: e.target.value,
            }));
          }}
          value={editedPedido?.estado ?? ""}
        /> */}
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            deletePedidoMutation({
              id: editedPedido.id,
              // token: Authctx.user.token,
            });
          }}
        >
          Delete
        </Button>
      </form>
    );
  }
  export default DeleteEditPedidos;
  