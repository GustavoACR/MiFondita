import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import swal from "sweetalert";

export default function useNotification(
  successMessage,
  [isSuccess, isLoading, isError, error],
  loadingMessage = "Cargando...",
  action = () => {}
) {
  useEffect(() => {
    if (isSuccess) {
      swal("Listo!", successMessage, "success").then((confirm) => {
        if (confirm) {
          action();
        }
      });
    }
    if (isError) {
      if (error.data?.message?.includes("Este Good Receipt ya existe"))
        swal(
          "MatLabel ya registrada",
          error.data?.message ? error.data?.message : "",
          "warning"
        ).then((confirm) => {
          if (confirm) {
            action();
          }
        });
      else
        swal(
          "Error",
          error.data?.message ? error.data?.message : "",
          "error"
        ).then((confirm) => {
          if (confirm) {
            action();
          }
        });
    }
    if (isLoading) toast.loading(loadingMessage);
    else toast.dismiss();
  }, [isSuccess, isLoading, isError, error]);
}