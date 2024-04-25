import { OcsakApi } from "../OcsakApi";
import server from "../../server.json";

const comcellsApiSlice = OcsakApi.injectEndpoints({
    endpoints: (builder) => ({
      getBebidas: builder.query({
        query: () => {
          return {
            url: `${server.url}/Bebidas`,
          };
        },
        providesTags: ["bebidas"],
      }),
      createBebida: builder.mutation({
        query: ({ newBebida, token }) => {
          return {
            url: `${server.url}/Bebidas`,
            method: "POST",
            body: newBebida,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["bebidas"],
      }),
      editBebida: builder.mutation({
        query: ({ editedBebida, token }) => {
          return {
            url: `${server.url}/Bebidas`,
            method: "PUT",
            body: editedBebida,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["bebidas"],
      }),
      deleteBebida: builder.mutation({
        query: ({ id, token }) => {
          return {
            url: `${server.url}/Bebidas?IdBebida=${id}`,
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["bebidas"],
      }),
    }),
  });
  
  export const {
    useGetBebidasQuery,
    useCreateBebidaMutation,
    useEditBebidaMutation,
    useDeleteBebidaMutation
  } = comcellsApiSlice;