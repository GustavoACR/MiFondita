import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import server from "../server.json";

export const OcsakApi = createApi({
  reducerPath: "ocsak",
  baseQuery: fetchBaseQuery({ baseUrl: server.url }),
  tagTypes: ["requerimientos", "usuarios"],
  endpoints: (builder) => ({
    getRequerimientos: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getTemperaturaExterna: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/TemperaturaExterna`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getTemperaturaInterna: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/TemperaturaInterna`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getHumedadRelativa: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/HumedadRelativa`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getBateria: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/Bateria`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getAceleracion: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/Aceleracion`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getVibracion: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/Vibracion`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getConcentracionO2: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/ConcentracionO2`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getConcentracionCO2: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/ConcentracionCO2`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    getConcentracionCO: builder.query({
      query: () => {
        return {
          url: `${server.url}/Requerimientos/ConcentracionCO`,
        };
      },
      providesTags: ["requerimientos"],
    }),
    deleteAll: builder.mutation({
      query: () => {
        return {
          url: `${server.url}/Requerimientos`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["requerimientos"],
    }),
    getUsers: builder.query({
      query: () => {
        return {
          url: `${server.url}/Users`,
        };
      },
      providesTags: ["usuarios"],
    }),
    createUser: builder.mutation({
      query: ({ newUser }) => {
        return {
          url: `${server.url}/Users`,
          method: "POST",
          body: newUser,
        };
      },
      invalidatesTags: ["usuarios"],
    }),
    editUser: builder.mutation({
      query: ({ editedUser }) => {
        return {
          url: `${server.url}/Users`,
          method: "PUT",
          body: editedUser,
        };
      },
      invalidatesTags: ["usuarios"],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => {
        return {
          url: `${server.url}/Users?IdUser=${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["usuarios"],
    }),
  }),
});
export const {
  useGetRequerimientosQuery,
  useGetTemperaturaExternaQuery,
  useGetTemperaturaInternaQuery,
  useGetHumedadRelativaQuery,
  useGetBateriaQuery,
  useGetAceleracionQuery,
  useGetVibracionQuery,
  useGetConcentracionO2Query,
  useGetConcentracionCO2Query,
  useGetConcentracionCOQuery,
  useDeleteAllMutation,
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
} = OcsakApi;