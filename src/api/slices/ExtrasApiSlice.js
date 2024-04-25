import { OcsakApi } from "../OcsakApi";
import server from "../../server.json";

const comcellsApiSlice = OcsakApi.injectEndpoints({
    endpoints: (builder) => ({
      getExtras: builder.query({
        query: (token) => {
          return {
            url: `${server.url}/Extras`,
            headers: {
              Authorization: token ? "Bearer " + token : "",
            },
          };
        },
        providesTags: ["extras"],
      }),
      createExtra: builder.mutation({
        query: ({ newExtra, token }) => {
          return {
            url: `${server.url}/Extras`,
            method: "POST",
            body: newExtra,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["extras"],
      }),
      editExtra: builder.mutation({
        query: ({ editedExtra, token }) => {
          return {
            url: `${server.url}/Extras`,
            method: "PUT",
            body: editedExtra,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["extras"],
      }),
      deleteExtra: builder.mutation({
        query: ({ id, token }) => {
          return {
            url: `${server.url}/Extras?IdExtra=${id}`,
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        },
        invalidatesTags: ["extras"],
      }),
    }),
  });
  
  export const {
    useGetExtrasQuery,
    useCreateExtraMutation,
    useEditExtraMutation,
    useDeleteExtraMutation
  } = comcellsApiSlice;