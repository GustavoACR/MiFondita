import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import server from "../server.json";

export const OcsakApi = createApi({
  reducerPath: "ocsak",
  baseQuery: fetchBaseQuery({ baseUrl: server.url }),
  tagTypes: ["pedidos", "bebidas", "comidas", "desayunos", "extras", "snacks", "usuarios"],
  endpoints: (builder) => ({
    getPedidos: builder.query({
      query: () => {
        return {
          url: `${server.url}/Pedido`,
        };
      },
      providesTags: ["pedidos"],
    }),
    createPedido: builder.mutation({
      query: ({ newPedido }) => {
        return {
          url: `${server.url}/Pedido`,
          method: "POST",
          body: newPedido,
        };
      },
      invalidatesTags: ["pedidos"],
    }),
    deletePedido: builder.mutation({
      query: ({ id }) => {
        return {
          url: `${server.url}/Pedido?IdPedido=${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["pedidos"],
    }),
  }),
});
export const {
  useGetPedidosQuery,
  useCreatePedidoMutation,
  useDeletePedidoMutation
} = OcsakApi;