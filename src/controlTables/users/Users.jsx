import RegisterUsers from "./RegisterUser";
import DeleteEditUsers from "./DeleteEditUsers";
import React, { useState, useContext } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
// import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";
import { useGetUsuariosQuery } from "../../api/slices/UsuariosApiSlice";

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
      name: "numero",
      label: "CELLPHONE NUMBER",
      options: { filterType: "textField" },
    },
    {
      name: "rol",
      label: "ROL",
      options: { filterType: "textField" },
    },
    // {
    //   name: "password",
    //   label: "PASSWORD",
    //   // options: { display: "none" },
    // },
  ];

  const initialDb = [
    {
      id: "1",
      completeName: "32935407",
      cellphoneNumber: "REQUERIMIENTO"
    },
  ];
  
  function Users() {
    // const Authctx = useContext(AuthContext);
    const [db, setDb] = useState(initialDb);
  
    const [isOpen, openModal, closeModal] = useModal(false);
    const [editedUser, setEditedUser] = useState(null);
  
    const {
      data: users,
      isSuccess,
      isError,
      isFetching,
      error,
    } = useGetUsuariosQuery();
  
    return (
      <div className="animate-fadeIn flex font-aronesans flex-col items-center mb-5 justify-center h-full">
        {/* {Authctx.user.role !== "ADMIN" ? <Navigate to="/" /> : null} */}
        <div>
          <button
            className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
            onClick={openModal}
          >
            Nuevo Usuario
          </button>
        </div>
  
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          titulo={"Formulario"}
          subtitulo={"Registro para nuevo usuario"}
        >
          <RegisterUsers />
        </Modal>
  
        <Modal
          isOpen={editedUser}
          closeModal={() => {
            setEditedUser(null);
          }}
          titulo={"Formulario"}
          subtitulo={"Edición o eliminación de un usuario"}
        >
          <DeleteEditUsers
            editedUser={editedUser}
            setEditedUser={setEditedUser}
          />
        </Modal>
        
          {isFetching ? (
          <CircularProgress />
        ) : (
          <MUIDataTable
            title="Users"
            data={users}
            columns={tableHeader}
            options={{
              filterType: "dropdown",
              downloadOptions: {
                filename: `FQAIPs_${dayjs().format("DD/MM/YYYY_HHmmss")}`,
              },
              onRowClick: (x) => {
                setEditedUser({
                  id: x[0],
                  completeName: x[1],
                  number: x[2],
                  rol: [3],
                  //password: x[4],
                });
              },
              selectedRows: "none",
            }}
          />
        )}
      </div>
    );
  }
  export default Users;
  