import RegisterBebidas from "./RegisterBebidas";
import DeleteEditBebidas from "./DeleteEditBebidas";
import React, { useState, useContext } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
// import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";
import { useGetBebidasQuery } from "../../api/slices/BebidasApiSlice";

const tableHeader = [
    {
      name: "id",
      label: "ID",
      options: { filterType: "textField" },
    },
    {
      name: "completeName",
      label: "NAME COMPLETE",
      options: { filterType: "textField" },
    },
    {
      name: "precio",
      label: "PRECIO",
      options: { filterType: "textField" },
    },
    {
      name: "descripcion",
      label: "DESCRIPCION",
      options: { filterType: "textField" },
    },
  ];

  const initialDb = [
    {
      id: "1",
      completeName: "Sanwis",
      precio: "50$",
      descripcion: "sanwis de pollo"
    },
  ];
  
  function Bebidas() {
    // const Authctx = useContext(AuthContext);
    const [db, setDb] = useState(initialDb);
  
    const [isOpen, openModal, closeModal] = useModal(false);
    const [editedBebida, setEditedBebida] = useState(null);
  
    const {
      data: bebidas,
      isSuccess,
      isError,
      isFetching,
      error,
    } = useGetBebidasQuery();
  
    return (
      <div className="animate-fadeIn font-aronesans flex flex-col items-center mb-5 justify-center h-full">
        {/* {Authctx.user.role !== "ADMIN" ? <Navigate to="/" /> : null} */}
        <div>
          <button
            className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
            onClick={openModal}
          >
            Nueva Bebida
          </button>
        </div>
  
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          titulo={"Formulario"}
          subtitulo={"Registro para nueva Bebida"}
        >
          <RegisterBebidas />
        </Modal>
  
        <Modal
          isOpen={editedBebida}
          closeModal={() => {
            setEditedBebida(null);
          }}
          titulo={"Formulario"}
          subtitulo={"Edición o eliminación de una Bebida"}
        >
          <DeleteEditBebidas
            editedBebida={editedBebida}
            setEditedBebida={setEditedBebida}
          />
        </Modal>
        
          {isFetching ? (
            <CircularProgress />
          ) : (
            <MUIDataTable
            title="Bebidas"
            data={bebidas}
            columns={tableHeader}
            options={{
              filterType: "dropdown",
              downloadOptions: {
                filename: `FQAIPs_${dayjs().format("DD/MM/YYYY_HHmmss")}`,
              },
              onRowClick: (x) => {
                setEditedBebida({
                  id: x[0],
                  completeName: x[1],
                  precio: x[2],
                  descripcion: x[3],
                });
              },
              selectedRows: "none",
            }}
          />
          )}
        
      </div>
    );
  }
  export default Bebidas;
  