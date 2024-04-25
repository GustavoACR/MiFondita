
import DeleteEditPedidos from "./DeleteEditPedidos";
import React, { useState, useContext } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
// import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";
import { useGetPedidosQuery } from "../../api/OcsakApi";

const tableHeader = [
    {
      name: "id",
      label: "ID",
      options: { filterType: "textField" },
    },
    {
      name: "platillos",
      label: "PLATILLOS",
      options: { filterType: "textField" },
    },
    {
      name: "nombreCliente",
      label: "CLIENTE",
      options: { filterType: "textField" },
    },
    {
      name: "numeroCliente",
      label: "TELEFONO",
      options: { filterType: "textField" },
    },
    {
      name: "tipoPedido",
      label: "TIPO DE PEDIDO",
      options: { filterType: "textField" },
    },
    {
      name: "precio",
      label: "PRECIO",
      options: { filterType: "textField" },
    },
    // {
    //   name: "estado",
    //   label: "ESTADO",
    //   options: { filterType: "textField" },
    // },
  ];

  const initialDb = [
    {
      id: "1",
      platillos: "Sanwis, wrap",
      cliente: "Gustavo",
      numero: "6311671042",
      tipoPedido: "recoger",
      precio: "$150",
      estado:"En preparacion"
    },
  ];
  
  function Pedidos() {
    // const Authctx = useContext(AuthContext);
    const [db, setDb] = useState(initialDb);
  
    const [isOpen, openModal, closeModal] = useModal(false);
    const [editedPedido, setEditedPedido] = useState(null);
  
    const {
      data: pedidos,
      isSuccess,
      isError,
      isFetching,
      error,
    } = useGetPedidosQuery();
  
    return (
      <div className="animate-fadeIn font-aronesans flex flex-col items-center py-5 justify-center h-full">
        {/* {Authctx.user.role !== "ADMIN" ? <Navigate to="/" /> : null} */}
  
        <Modal
          isOpen={editedPedido}
          closeModal={() => {
            setEditedPedido(null);
          }}
          titulo={"Formulario"}
          subtitulo={"Eliminación de un Pedido"}
        >
          <DeleteEditPedidos
            editedPedido={editedPedido}
            setEditedPedido={setEditedPedido}
          />
        </Modal>

        {isFetching ? (
          <CircularProgress />
        ) : (
          <MUIDataTable
            title="Pedidos"
            data={pedidos}
            columns={tableHeader}
            options={{
              filterType: "dropdown",
              downloadOptions: {
                filename: `FQAIPs_${dayjs().format("DD/MM/YYYY_HHmmss")}`,
              },
              onRowClick: (x) => {
                setEditedPedido({
                  id: x[0],
                  platillos: x[1],
                  cliente: x[2],
                  numero: x[3],
                  tipoPedido: x[4],
                  precio: x[5],
                  // estado: x[6],
                });
              },
              selectedRows: "none",
            }}
          />
        )}
        {/* {isFetching ? (
          <CircularProgress />
        ) : (
          
        )} */}
      </div>
    );
  }
  export default Pedidos;
  