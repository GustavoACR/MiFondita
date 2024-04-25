import { OcsakApi } from "../OcsakApi";
import server from "../../server.json";

const comcellsApiSlice = OcsakApi.injectEndpoints({
    endpoints: (builder) => ({
      getDesayunos: builder.query({
        query: (token) => {
          return {
            url: `${server.url}/Desayunos`,
            headers: {
              Authorization: token ? "Bearer " + token : "",
            },
          };
        },
        providesTags: ["desayunos"],
      }),
      createDesayuno: builder.mutation({
        query: ({ newDesayuno, token }) => {
          return {
            url: `${server.url}/Desayunos`,
            method: "POST",
            body: newDesayuno,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["desayunos"],
      }),
      editDesayuno: builder.mutation({
        query: ({ editedDesayuno, token }) => {
          return {
            url: `${server.url}/Desayunos`,
            method: "PUT",
            body: editedDesayuno,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["desayunos"],
      }),
      deleteDesayuno: builder.mutation({
        query: ({ id, token }) => {
          return {
            url: `${server.url}/Desayunos?IdDesayuno=${id}`,
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["desayunos"],
      }),
    }),
  });
  
  export const {
    useGetDesayunosQuery,
    useCreateDesayunoMutation,
    useEditDesayunoMutation,
    useDeleteDesayunoMutation
  } = comcellsApiSlice;