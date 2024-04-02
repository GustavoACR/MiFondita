import React, { useState } from "react";
import MenuItem from "../components/MenuItem"; 
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Pedidos = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Aquí defines tus datos de menú
  const menuComida = [
    {
      id: 1,
      name: "Hamburguesa",
      description: "Deliciosa hamburguesa con queso, lechuga y tomate.",
      price: 10.99,
    },
    {
      id: 2,
      name: "Pizza",
      description: "Pizza artesanal con tus ingredientes favoritos.",
      price: 12.99,
    },
  ];

  // Calcula el total de ítems en el carrito
  const totalItems = cartItems.length;

  // Calcula el precio total en el carrito sumando los precios de todos los elementos
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const [visibleDesayunos, setVisibleDesayunos] = useState(false);
  const toggleVisibilidadDesayunos = () => {
    setVisibleDesayunos(!visibleDesayunos);
  };

  const [visibleComidas, setVisibleComidas] = useState(false);
  const toggleVisibilidadComidas = () => {
    setVisibleComidas(!visibleComidas);
  };

  const [visibleSnacks, setVisibleSnacks] = useState(false);
  const toggleVisibilidadSnacks = () => {
    setVisibleSnacks(!visibleSnacks);
  };

  const [visibleBebidas, setVisibleBebidas] = useState(false);
  const toggleVisibilidadBebidas = () => {
    setVisibleBebidas(!visibleBebidas);
  };

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
          <div>
            {menuComida.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
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
          <div>
            {menuComida.map((item) => (
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
          <div>
            {menuComida.map((item) => (
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
          <div>
            {menuComida.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </div>

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
        <button className="bg-green-500 text-xl font-bold font-aronesans py-2 px-1 rounded-md my-1 hover:scale-105 active:translate-y-1 text-center" onClick={() => setCartItems([])}>
          Ordenar
        </button>
      </div>
    </div>
  );
};

export default Pedidos;
