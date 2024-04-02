import RegisterItems from "./RegisterItems";
import DeleteEditItems from "./DeleteEditItems";
import React, { useState, useContext } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
// import { AuthContext } from "../../context/AuthContext"; este solo es un comentario
import { Navigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";

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
  
  function Items() {
    // const Authctx = useContext(AuthContext);
    const [db, setDb] = useState(initialDb);
  
    const [isOpen, openModal, closeModal] = useModal(false);
    const [editedItem, setEditedItem] = useState(null);
  
    // const {
    //   data: users,
    //   isSuccess,
    //   isError,
    //   isFetching,
    //   error,
    // } = useGetUsersQuery();
  
    return (
      <div className="animate-fadeIn font-aronesans flex flex-col items-center mb-5 justify-center h-full">
        {/* {Authctx.user.role !== "ADMIN" ? <Navigate to="/" /> : null} */}
        <div>
          <button
            className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
            onClick={openModal}
          >
            Nuevo Item
          </button>
        </div>
  
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          titulo={"Formulario"}
          subtitulo={"Registro para nuevo Item"}
        >
          <RegisterItems />
        </Modal>
  
        <Modal
          isOpen={editedItem}
          closeModal={() => {
            setEditedItem(null);
          }}
          titulo={"Formulario"}
          subtitulo={"Edición o eliminación de un Item"}
        >
          <DeleteEditItems
            editedItem={editedItem}
            setEditedItem={setEditedItem}
          />
        </Modal>
  
        <MUIDataTable
            title="Items"
            data={db}
            columns={tableHeader}
            options={{
              filterType: "dropdown",
              downloadOptions: {
                filename: `FQAIPs_${dayjs().format("DD/MM/YYYY_HHmmss")}`,
              },
              onRowClick: (x) => {
                setEditedItem({
                  id: x[0],
                  completeName: x[1],
                  precio: x[2],
                  descripcion: x[3],
                });
              },
              selectedRows: "none",
            }}
          />
      </div>
    );
  }
  export default Items;
  
