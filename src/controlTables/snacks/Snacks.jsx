import RegisterSnacks from "./RegisterSnacks";
import DeleteEditSnacks from "./DeleteEditSnacks";
import React, { useState, useContext } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
// import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";
import { useGetSnacksQuery } from "../../api/slices/SnacksApiSlice";

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
  
  function Snacks() {
    // const Authctx = useContext(AuthContext);
    const [db, setDb] = useState(initialDb);
  
    const [isOpen, openModal, closeModal] = useModal(false);
    const [editedSnack, setEditedSnack] = useState(null);
  
    const {
      data: snacks,
      isSuccess,
      isError,
      isFetching,
      error,
    } = useGetSnacksQuery();
  
    return (
      <div className="animate-fadeIn font-aronesans flex flex-col items-center mb-5 justify-center h-full">
        {/* {Authctx.user.role !== "ADMIN" ? <Navigate to="/" /> : null} */}
        <div>
          <button
            className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
            onClick={openModal}
          >
            Nuevo Snack
          </button>
        </div>
  
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          titulo={"Formulario"}
          subtitulo={"Registro para nuevo Snack"}
        >
          <RegisterSnacks />
        </Modal>
  
        <Modal
          isOpen={editedSnack}
          closeModal={() => {
            setEditedSnack(null);
          }}
          titulo={"Formulario"}
          subtitulo={"Edición o eliminación de un Snack"}
        >
          <DeleteEditSnacks
            editedSnack={editedSnack}
            setEditedSnack={setEditedSnack}
          />
        </Modal>
        
          {isFetching ? (
          <CircularProgress />
        ) : (
          <MUIDataTable
            title="Snacks"
            data={snacks}
            columns={tableHeader}
            options={{
              filterType: "dropdown",
              downloadOptions: {
                filename: `FQAIPs_${dayjs().format("DD/MM/YYYY_HHmmss")}`,
              },
              onRowClick: (x) => {
                setEditedSnack({
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
  export default Snacks;
  