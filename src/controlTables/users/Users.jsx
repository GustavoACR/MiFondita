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
      name: "cellphoneNumber",
      label: "CELLPHONE NUMBER",
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
  
    // const {
    //   data: users,
    //   isSuccess,
    //   isError,
    //   isFetching,
    //   error,
    // } = useGetUsersQuery();
  
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
  
        <MUIDataTable
            title="Users"
            data={db}
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
                  cellphoneNumber: x[2],
                  //password: x[3],
                });
              },
              selectedRows: "none",
            }}
          />
      </div>
    );
  }
  export default Users;
  