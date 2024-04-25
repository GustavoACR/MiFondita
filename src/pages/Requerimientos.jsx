import React, { useState, useContext, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import dayjs from "dayjs";
import { useGetRequerimientosQuery } from "../api/OcsakApi";
import { TableCell, TableRow } from "@mui/material";
import { useDeleteAllMutation } from "../api/OcsakApi";
import { Button } from "@mui/material";
import { Context } from "../context/Context";
import Modal from "../components/Modal";
import { useModal } from "../hooks/useModal";
import Confirm from "../components/Confirm";

const initialDb = [
  {
    // id: "1",
    // requestedBy: "32935407",
    // supportType: "REQUERIMIENTO",
    // support: "CAMBIO DE FIXTURE",
    // description: "CAMBIO DE FIXTURE A LA VARIANTE 5",
    // created: "04/ABR/2023 10:05:15",
    // line: "DCU1",
    // equipment: "ICT101"
  },
];
const tableHeader = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "temperaturaInterna",
    label: "TEMPERATURA INTERNA",
  },
  {
    name: "temperaturaExterna",
    label: "TEMPERATURA EXTERNA",
  },
  {
    name: "humedadRelativa",
    label: "HUMEDAD RELATIVA",
  },
  {
    name: "altitud",
    label: "ALTITUD",
  },
  {
    name: "longitud",
    label: "LONGITUD",
  },
  {
    name: "nivelDeBateria",
    label: "NIVEL DE BATERIA",
  },
  {
    name: "aceleración",
    label: "ACELERACION",
  },
  {
    name: "vibración",
    label: "VIBRACION",
  },
  {
    name: "concentraciónDeO2",
    label: "CONCENTRACION DE O2",
  },
  {
    name: "concentraciónDeCo2",
    label: "CONCENTRACION DE CO2",
  },
  {
    name: "concentraciónDeCo",
    label: "CONCENTRACION DE CO",
  },
];

function Requerimientos() {
  // const [db, setDb] = useState(initialDb);
  const [confirm, setConfirm] = useState(false);
  const [isOpenDelete, openModalDelete, closeModalDelete] = useModal(false);

  const [header, setHeader] = useState(tableHeader);
  const Ctx = useContext(Context);

  const {
    data: requerimientos,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetRequerimientosQuery();

  const [
    deleteAllMutation,
    {
      isSuccess: isSuccessDelete,
      isLoading: isLoadingDelete,
      isError: isErrorDelete,
      error: errorDelete,
    },
  ] = useDeleteAllMutation();

  useEffect(() => {
    if (confirm === true) {
      deleteAllMutation();
      setConfirm(false);
    }
  }, [confirm]);
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center py-10 px-5 h-full">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        <span className="font-bold block">Bienvenid@</span>
      </h2>
      <p className="text-xl font-bold mb-1">Requerimientos OCSAK</p>
      <p className="text-xl font-bold mb-5">
        Abra el menú de la izquiera para ver más opciones
      </p>

      {Ctx.user.rol === "ADMIN" ? (
          <button
            className="bg-red-600 font-bold px-5 py-2 mb-6 rounded-md hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
            onClick={openModalDelete}
          >
            Eliminar Data
          </button>
      ) : null}

      <Confirm
        isOpen={isOpenDelete}
        titulo={
          "La eliminación se hará de forma automatica, segur@ que desea continuar?"
        }
      >
        <button
          className="bg-green-600 font-bold px-5 py-2 rounded-md hover:scale-105 active:translate-y-1 text-xl sm:text-2xl w-[200px]"
          onClick={() => {
            setConfirm(true);
            closeModalDelete();
          }}
        >
          Confirmar
        </button>
        <button
          className="bg-red-600 font-bold px-5 py-2 rounded-md hover:scale-105 active:translate-y-1 text-xl sm:text-2xl w-[200px]"
          onClick={closeModalDelete}
        >
          Cancelar
        </button>
      </Confirm>

      <MUIDataTable
        title="Requerimientos"
        data={requerimientos}
        columns={tableHeader}
        options={{
          filterType: "dropdown",
          downloadOptions: {
            filename: `FQAIPs_${dayjs().format("DD/MM/YYYY_HHmmss")}`,
          },
        //   setRowProps: (x) => {
        //     if (x[9] !== "EN ESPERA DE SOPORTE") {
        //       return {
        //         style: { background: "green" },
        //       };
        //     }
        //   },
        }}
      />
    </div>
  );
}
export default Requerimientos;
