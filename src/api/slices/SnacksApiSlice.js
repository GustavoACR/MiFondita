import { OcsakApi } from "../OcsakApi";
import server from "../../server.json";

const comcellsApiSlice = OcsakApi.injectEndpoints({
    endpoints: (builder) => ({
      getSnacks: builder.query({
        query: (token) => {
          return {
            url: `${server.url}/Snacks`,
            headers: {
              Authorization: token ? "Bearer " + token : "",
            },
          };
        },
        providesTags: ["snacks"],
      }),
      createSnack: builder.mutation({
        query: ({ newSnack, token }) => {
          return {
            url: `${server.url}/Snacks`,
            method: "POST",
            body: newSnack,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["snacks"],
      }),
      editSnack: builder.mutation({
        query: ({ editedSnack, token }) => {
          return {
            url: `${server.url}/Snacks`,
            method: "PUT",
            body: editedSnack,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["snacks"],
      }),
      deleteSnack: builder.mutation({
        query: ({ id, token }) => {
          return {
            url: `${server.url}/Snacks?IdSnack=${id}`,
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["snacks"],
      }),
    }),
  });
  
  export const {
    useGetSnacksQuery,
    useCreateSnackMutation,
    useEditSnackMutation,
    useDeleteSnackMutation
  } = comcellsApiSlice;