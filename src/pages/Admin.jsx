import React, { useState } from "react";
import { Link } from "react-router-dom";
function Admin() {
  return (
    <div className="animate-fadeIn flex flex-col font-aronesans items-center justify-center py-10 px-5 h-full">

      <Link
        to="/usuarios"
        className="bg-yellow-500 font-bold px-5 py-2 rounded-md my-5 hover:scale-105 active:translate-y-1 text-center sm:text-2xl w-[400px]"
      >
        Usuarios
      </Link>

      <Link
        to="/tiempos"
        className="bg-yellow-500 font-bold px-5 py-2 rounded-md hover:scale-105 active:translate-y-1 text-center sm:text-2xl w-[400px]"
      >
        Items
      </Link>
    </div>
  );
}

export default Admin;
