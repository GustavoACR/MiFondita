import React, { useState } from "react";
import { Link } from "react-router-dom";
function Tiempos() {
  return (
    <div className="animate-fadeIn flex flex-col font-aronesans items-center justify-center py-10 px-5 h-full">

      <Link
        to="/desayunos"
        className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-2 hover:scale-105 active:translate-y-1 text-center sm:text-2xl w-[400px]"
      >
        Desayunos
      </Link>

      <Link
        to="/comidas"
        className="bg-yellow-500 font-bold px-5 py-2 rounded-md  my-2 hover:scale-105 active:translate-y-1 text-center sm:text-2xl w-[400px]"
      >
        Comidas
      </Link>

      <Link
        to="/extras"
        className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-2 hover:scale-105 active:translate-y-1 text-center sm:text-2xl w-[400px]"
      >
        Extras
      </Link>

      <Link
        to="/snacks"
        className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-2 hover:scale-105 active:translate-y-1 text-center sm:text-2xl w-[400px]"
      >
        Snacks
      </Link>

      <Link
        to="/bebidas"
        className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-2 hover:scale-105 active:translate-y-1 text-center sm:text-2xl w-[400px]"
      >
        Bebidas
      </Link>
    </div>
  );
}

export default Tiempos;