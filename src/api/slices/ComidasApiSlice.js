import { OcsakApi } from "../OcsakApi";
import server from "../../server.json";

const comcellsApiSlice = OcsakApi.injectEndpoints({
    endpoints: (builder) => ({
      getComidas: builder.query({
        query: (token) => {
          return {
            url: `${server.url}/Comidas`,
            headers: {
              Authorization: token ? "Bearer " + token : "",
            },
          };
        },
        providesTags: ["comidas"],
      }),
      createComida: builder.mutation({
        query: ({ newComida, token }) => {
          return {
            url: `${server.url}/Comidas`,
            method: "POST",
            body: newComida,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["comidas"],
      }),
      editComida: builder.mutation({
        query: ({ editedComida, token }) => {
          return {
            url: `${server.url}/Comidas`,
            method: "PUT",
            body: editedComida,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["comidas"],
      }),
      deleteComida: builder.mutation({
        query: ({ id, token }) => {
          return {
            url: `${server.url}/Comidas?IdComida=${id}`,
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["comidas"],
      }),
    }),
  });
  
  export const {
    useGetComidasQuery,
    useCreateComidaMutation,
    useEditComidaMutation,
    useDeleteComidaMutation
  } = comcellsApiSlice;