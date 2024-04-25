import RegisterDesayunos from "./RegisterDesayunos";
import DeleteEditDesayunos from "./DeleteEditDesayunos";
import React, { useState, useContext } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
// import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";
import { useGetDesayunosQuery } from "../../api/slices/DesayunosApiSlice";

const tableHeader = [
    {
      name: "id",
      label: "ID",
      options: { filterType: "textField" },
    },
    {
      name: "nombre",
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
  
  function Desayunos() {
    // const Authctx = useContext(AuthContext);
    const [db, setDb] = useState(initialDb);
  
    const [isOpen, openModal, closeModal] = useModal(false);
    const [editedDesayuno, setEditedDesayuno] = useState(null);
  
    const {
      data: desayunos,
      isSuccess,
      isError,
      isFetching,
      error,
    } = useGetDesayunosQuery();
  
    return (
      <div className="animate-fadeIn font-aronesans flex flex-col items-center mb-5 justify-center h-full">
        {/* {Authctx.user.role !== "ADMIN" ? <Navigate to="/" /> : null} */}
        <div>
          <button
            className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
            onClick={openModal}
          >
            Nuevo Desayuno
          </button>
        </div>
  
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          titulo={"Formulario"}
          subtitulo={"Registro para nuevo Desayuno"}
        >
          <RegisterDesayunos />
        </Modal>
  
        <Modal
          isOpen={editedDesayuno}
          closeModal={() => {
            setEditedDesayuno(null);
          }}
          titulo={"Formulario"}
          subtitulo={"Edición o eliminación de un Desayuno"}
        >
          <DeleteEditDesayunos
            editedDesayuno={editedDesayuno}
            setEditedDesayuno={setEditedDesayuno}
          />
        </Modal>
          {isFetching ? (
          <CircularProgress />
        ) : (
          <MUIDataTable
            title="Desayunos"
            data={desayunos}
            columns={tableHeader}
            options={{
              filterType: "dropdown",
              downloadOptions: {
                filename: `FQAIPs_${dayjs().format("DD/MM/YYYY_HHmmss")}`,
              },
              onRowClick: (x) => {
                setEditedDesayuno({
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
  export default Desayunos;
  