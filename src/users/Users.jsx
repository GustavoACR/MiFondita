import Modal from "../components/Modal";
import React, { useContext, useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { useGetUsersQuery } from "../api/OcsakApi";
import { CircularProgress } from "@mui/material";
import RegisterUser from "./RegisterUser";
import DeleteEditUsers from "./DeleteEditUsers";

const tableHeader = [
  {
    name: "id",
    label: "ID",
    options: { filterType: "textField" },
  },
  {
    name: "nombre",
    label: "NOMBRE",
  },
  {
    name: "contraseña",
    label: "CONTRASEÑA",
  },
  {
    name: "rol",
    label: "ROL",
  },
];

function Users() {

  const [isOpen, openModal, closeModal] = useModal(false);
  const [editedUser, setEditedUser] = useState(null);

  const {
    data: users,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetUsersQuery();

  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center py-10 px-5 h-full">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        <span className="font-bold block">Bienvenid@</span>
      </h2>
      <p className="text-xl font-bold">Support Request</p>
      <div>
        <button
          className="bg-red-600 font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
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
        <RegisterUser />
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
                nombre: x[1],
                contraseña: x[2],
                rol: x[3],
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
