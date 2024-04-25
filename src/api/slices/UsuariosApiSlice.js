import { OcsakApi } from "../OcsakApi";
import server from "../../server.json";

const comcellsApiSlice = OcsakApi.injectEndpoints({
    endpoints: (builder) => ({
      getUsuarios: builder.query({
        query: (token) => {
          return {
            url: `${server.url}/Usuario`,
          };
        },
        providesTags: ["usuarios"],
      }),
      createUsuario: builder.mutation({
        query: ({ newUsuario, token }) => {
          return {
            url: `${server.url}/Usuario`,
            method: "POST",
            body: newUsuario,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["usuarios"],
      }),
      editUsuario: builder.mutation({
        query: ({ editedUsuario, token }) => {
          return {
            url: `${server.url}/Usuario`,
            method: "PUT",
            body: editedUsuario,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["usuarios"],
      }),
      deleteUsuario: builder.mutation({
        query: ({ id, token }) => {
          return {
            url: `${server.url}/Usuario?IdUsuario=${id}`,
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["usuarios"],
      }),
    }),
  });
  
  export const {
    useGetUsuariosQuery,
    useCreateUsuarioMutation,
    useEditUsuarioMutation,
    useDeleteUsuarioMutation
  } = comcellsApiSlice;