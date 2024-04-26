import React, { useState, useContext, useEffect } from "react";
import MenuItem from "../components/MenuItem"; 
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useCreatePedidoMutation } from "../api/OcsakApi";
import useNotification from "../hooks/useNotification";
import { Context } from "../context/Context";
import {useModal} from "../hooks/useModal"
import Modal from "../components/Modal";
import { Autocomplete, TextField } from "@mui/material";
import Confirm from "../components/Confirm";
import { CircularProgress } from "@mui/material";
import { useGetBebidasQuery } from "../api/slices/BebidasApiSlice";
import { useGetComidasQuery } from "../api/slices/ComidasApiSlice";
import { useGetDesayunosQuery } from "../api/slices/DesayunosApiSlice";
import { useGetExtrasQuery } from "../api/slices/ExtrasApiSlice";
import { useGetSnacksQuery } from "../api/slices/SnacksApiSlice";

const Ordenar = () => {
  const Authctx = useContext(Context);

  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenDelete, openModalDelete, closeModalDelete] = useModal(false);
  const [confirm, setConfirm] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [tipoPedido, setTipoPedido] = useState("");
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const {
    data: bebidas,
    isSuccessBebidas,
    isErrorBebidas,
    isFetchingBebidas,
    errorBebidas,
  } = useGetBebidasQuery();

  const {
    data: comidas,
    isSuccessComidas,
    isErrorComidas,
    isFetchingComidas,
    errorComidas,
  } = useGetComidasQuery();

  const {
    data: desayunos,
    isSuccessDesayunos,
    isErrorDesayunos,
    isFetchingDesayunos,
    errorDesayunos,
  } = useGetDesayunosQuery();

  const {
    data: extras,
    isSuccessExtras,
    isErrorExtras,
    isFetchingExtras,
    errorExtras,
  } = useGetExtrasQuery();

  const {
    data: snacks,
    isSuccessSnacks,
    isErrorSnacks,
    isFetchingSnacks,
    errorSnacks,
  } = useGetSnacksQuery();

  const [createPedidoMutation, { isSuccess, isLoading, isError, error }] =
  useCreatePedidoMutation();

  useNotification("Se registró correctamente", [
    isSuccess,
    isLoading,
    isError,
    error,
  ]);

  // Aquí defines tus datos de menú
  const menuComida = [
    {
      id: 1,
      name: "Hamburguesa",
      description: "Deliciosa hamburguesa con queso, lechuga y tomate.",
      price: 50,
    },
    {
      id: 2,
      name: "Pizza",
      description: "Pizza artesanal con tus ingredientes favoritos.",
      price: 50,
    },
    {
      id: 3,
      name: "Sandwich",
      description: "Delicioso sandwiches de jamon, pollo o panela",
      price: 50,
    },
  ];

  const menuDesayuno = [
    {
      id: 1,
      name: "Omelette",
      description: "Omelette de huevo con tus topping favoritos",
      price: 50,
    },
    {
      id: 2,
      name: "Toas",
      description: "Toas dulce o salado",
      price: 50,
    },
    {
      id: 3,
      name: "Chilaquiles",
      description: "Deliciosis chilaquiles con tu salsa o acompañamiento preferido",
      price: 50,
    },
  ];

  const menuExtras = [
    {
      id: 1,
      name: "Queso panela",
      description: "",
      price: 10,
    },
    {
      id: 2,
      name: "Aguacate",
      description: "",
      price: 10,
    },
  ];

  const menuSnacks = [
    {
      id: 1,
      name: "Yogurt griego con frutas",
      description: "",
      price: 50,
    },
    {
      id: 2,
      name: "Galletas surtidas",
      description: "",
      price: 50,
    },
    {
      id: 3,
      name: "Pay de queso",
      description: "",
      price: 50,
    },
  ];

  const menuBebidas = [
    {
      id: 1,
      name: "Cafe americano",
      description: "",
      price: 50,
    },
    {
      id: 2,
      name: "Jugos naturales",
      description: "",
      price: 50,
    },
    {
      id: 3,
      name: "Refrescos",
      description: "",
      price: 50,
    },
  ];

  // Calcula el total de ítems en el carrito
  const totalItems = cartItems.length;

  // Calcula el precio total en el carrito sumando los precios de todos los elementos
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const cartItemNames = cartItems.map(item => item.name).join(', ');

  const options = ["Para recoger", "Para comer en restaurant"];

  // Define variables para el total de ítems y el precio total
// let totalItems = 0;
// let totalPrice = 0;

// // Calcula el total de ítems sumando la cantidad de cada elemento en el carrito
// for (const item of cartItems) {
//   totalItems += item.quantity; // Suponiendo que cada elemento tiene una propiedad 'quantity'
// }

// // Calcula el precio total sumando los precios de cada elemento en el carrito
// for (const item of cartItems) {
//   totalPrice += item.price * item.quantity; // Multiplica el precio por la cantidad de cada elemento
// }


  const [visibleDesayunos, setVisibleDesayunos] = useState(false);
  const toggleVisibilidadDesayunos = () => {
    setVisibleDesayunos(!visibleDesayunos);
  };

  const [visibleComidas, setVisibleComidas] = useState(false);
  const toggleVisibilidadComidas = () => {
    setVisibleComidas(!visibleComidas);
  };

  const [visibleExtras, setVisibleExtras] = useState(false);
  const toggleVisibilidadExtras = () => {
    setVisibleExtras(!visibleExtras);
  };

  const [visibleSnacks, setVisibleSnacks] = useState(false);
  const toggleVisibilidadSnacks = () => {
    setVisibleSnacks(!visibleSnacks);
  };

  const [visibleBebidas, setVisibleBebidas] = useState(false);
  const toggleVisibilidadBebidas = () => {
    setVisibleBebidas(!visibleBebidas);
  };
  useEffect(() => {
    if (confirm === true) {
      console.log(totalPrice);
      // e.preventDefault(); // Evita que el formulario se envíe automáticamente
          createPedidoMutation({
            newPedido: {
              platillos: cartItemNames,
              nombreCliente: Authctx.user.nombre,
              numeroCliente: Authctx.user.numero,
              tipoPedido: tipoPedido,
              precio: totalPrice,
            },
          });
          setCartItems([]); // Limpia el carrito de compras
          closeModal();
      setConfirm(false);
    }
  }, [confirm]);
  return (
    <div>
      <div className="bg-white flex flex-col text-center items-center justify-center">
        {/* <h2>Menú</h2> */}
        <Link
          to="/admin"
          className="bg-red-500 sm:text-5xl text-3xl font-bold font-truculenta py-2 px-1 rounded-md my-1 hover:scale-105 active:translate-y-1"
          >
            Administracion
        </Link>

        <Link
          to="/pedidos"
          className="bg-red-500 sm:text-5xl text-3xl font-bold font-truculenta py-2 px-1 rounded-md my-1 hover:scale-105 active:translate-y-1"
          >
            Pedidos
        </Link>
      </div>

      <div>
        <button onClick={toggleVisibilidadDesayunos} className="bg-white w-full sm:text-5xl text-3xl font-bold font-truculenta py-2 rounded-md sm:hover:text-[50px] hover:text-[35px] active:translate-y-1 text-center flex items-center justify-center">
        Desayunos
        {visibleDesayunos ? (
          <TfiAngleUp className="ml-5 text-3xl"/>
        ) : (
          <TfiAngleDown className="ml-5 text-3xl"/>
        )}
        
        </button>
        {visibleDesayunos && (
          <div className="bg-white flex flex-col sm:flex-row items-center justify-center">
            {menuDesayuno.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
        {/* {visibleDesayunos && (
          <div className="bg-white flex flex-col sm:flex-row items-center justify-center">
            {isFetchingDesayunos ? (
              <CircularProgress />
            ) : (
              desayunos.map((desayuno) => (
                <MenuItem
                  key={desayuno.id}
                  item={{
                    id: desayuno.id,
                    name: desayuno.nombre,
                    description: desayuno.descripcion,
                    price: desayuno.precio,
                  }}
                  onAddToCart={handleAddToCart}
                />
              ))
            )}
          </div>
        )} */}
      </div>

      <div>
        <button onClick={toggleVisibilidadComidas} className="bg-white w-full sm:text-5xl text-3xl font-bold font-truculenta py-2 rounded-md sm:hover:text-[50px] hover:text-[35px] active:translate-y-1 text-center flex items-center justify-center">
        Comidas
        {visibleComidas ? (
          <TfiAngleUp className="ml-5 text-3xl"/>
        ) : (
          <TfiAngleDown className="ml-5 text-3xl"/>
        )}
        </button>
        {visibleComidas && (
          <div className="bg-white flex flex-col sm:flex-row items-center justify-center">
            {menuComida.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </div>

      <div>
        <button onClick={toggleVisibilidadExtras} className="bg-white w-full sm:text-5xl text-3xl font-bold font-truculenta py-2 rounded-md sm:hover:text-[50px] hover:text-[35px] active:translate-y-1 text-center flex items-center justify-center">
        Extras
        {visibleExtras ? (
          <TfiAngleUp className="ml-5 text-3xl"/>
        ) : (
          <TfiAngleDown className="ml-5 text-3xl"/>
        )}
        </button>
        {visibleExtras && (
          <div className="bg-white flex flex-col sm:flex-row items-center justify-center">
            {menuExtras.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </div>

      <div>
        <button onClick={toggleVisibilidadSnacks} className="bg-white w-full sm:text-5xl text-3xl font-bold font-truculenta py-2 rounded-md sm:hover:text-[50px] hover:text-[35px] active:translate-y-1 text-center flex items-center justify-center">
        Snacks
        {visibleSnacks ? (
          <TfiAngleUp className="ml-5 text-3xl"/>
        ) : (
          <TfiAngleDown className="ml-5 text-3xl"/>
        )}
        </button>
        {visibleSnacks && (
          <div className="bg-white flex flex-col sm:flex-row items-center justify-center">
            {menuSnacks.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </div>

      <div>
        <button onClick={toggleVisibilidadBebidas} className="bg-white w-full sm:text-5xl text-3xl font-bold font-truculenta py-2 rounded-md sm:hover:text-[50px] hover:text-[35px] active:translate-y-1 text-center flex items-center justify-center">
        Bebidas
        {visibleBebidas ? (
          <TfiAngleUp className="ml-5 text-3xl"/>
        ) : (
          <TfiAngleDown className="ml-5 text-3xl"/>
        )}
        </button>
        {visibleBebidas && (
          <div className="bg-white flex flex-col sm:flex-row items-center justify-center">
            {menuBebidas.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </div>

      <Confirm
        isOpen={isOpenDelete}
        titulo={
          "El pedido se hará de forma automatica, segur@ que desea continuar?"
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

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        titulo={"Tu orden esta por se tomada"}
        subtitulo={"Seleccione una opcion"}
      >
        <Autocomplete
        disablePortal
        className="w-[400px]"
        onChange={(_, event) => {
          setTipoPedido(event);
        }}
        sx={{ m: 1, minWidth: 250 }}
        options={options}
        renderInput={(params) => (
          <TextField
            variant="filled"
            required
            {...params}
            label="Para recoger o comer en sitio?"
          />
        )}
        />

        {tipoPedido ? (
          <button className="bg-green-500 text-xl font-bold font-aronesans py-2 px-1 mt-3 rounded-md hover:scale-105 active:translate-y-1 text-center" onClick={openModalDelete}>
          Ordenar
          </button>
        ) : null}
        
        {/* <form onSubmit={(e) => {
          e.preventDefault(); // Evita que el formulario se envíe automáticamente
          createPedidoMutation({
            newPedido: {
              platillos: cartItemNames,
              cliente: Authctx.user.name,
              numero: Authctx.user.numero,
              tipoPedido: tipoPedido,
              precio: totalPrice,
            },
          });
          setCartItems([]); // Limpia el carrito de compras
          closeModal();
        }}>
          <button type="submit" className="bg-green-500 text-xl font-bold font-aronesans py-2 px-1 rounded-md my-1 hover:scale-105 active:translate-y-1 text-center">
            Ordenar
          </button>
        </form> */}
      </Modal>

      <div className="px-4">
        <h3 className="font-aronesans font-bold sm:text-2xl text-xl">Carrito de compras</h3>
        <ul className="font-truculenta font-bold text-xl">
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}
              {/* <Button variant="contained" onClick={() => handleRemoveFromCart(index)}>
                Eliminar
              </Button> */}
              <button className="bg-red-500 font-bold font-aronesans py-2 px-1 rounded-md my-1 hover:scale-105 active:translate-y-1 text-center" onClick={() => handleRemoveFromCart(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <p className="font-truculenta font-bold text-xl">Total de ítems: {totalItems}</p>
        <p className="font-truculenta font-bold text-xl">Precio total: ${totalPrice.toFixed(2)}</p>
        {/* <Button variant="contained" color="success" onClick={() => setCartItems([])}>
          Ordenar
        </Button> */}
        {cartItems.length > 0 ? (
          <button className="bg-green-500 text-xl font-bold font-aronesans py-2 px-1 rounded-md my-1 hover:scale-105 active:translate-y-1 text-center" onClick={openModal}>
          Ordenar
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Ordenar;

