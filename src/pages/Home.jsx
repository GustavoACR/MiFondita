import React from "react";
import Logo from "../assets/Restaurant-Logo.png";
import Borde from "../assets/borde.png";
import sanwis from "../assets/sanwis.jpg";
import wafle from "../assets/waffle-removebg-preview.png";
import wrap from "../assets/wrapverder.jpg";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="bg-blue-200">
      <div className="sm:h-[300px] lg:h-[450px]">
        <div className="flex items-center justify-between px-5 sm:px-10 py-3 sm:py-5">
          <div>
            <img
              className="h-[200px] sm:h-[250px] lg:h-[400px] w-auto"
              src={Borde}
              alt="Logo"
            />
          </div>
          <div>
            <img
              className="h-[150px] sm:h-[150px] lg:h-[300px] w-auto"
              src={Logo}
              alt="Logo"
            />
          </div>
          <div>
            <img
              className="h-[200px] sm:h-[250px] lg:h-[400px] w-auto transform rotate-180"
              src={Borde}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div className="sm:h-[550px] bg-green-400 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-5">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">¡Bienvenidos al nuevo restaurante!</h1>
            <p className="text-base sm:text-xl">¡Estamos emocionados de presentarles nuestro nuevo restaurante!</p>
            <p className="mt-4 text-base sm:text-xl">Aquí está nuestra oferta especial de inauguración:</p>
            <div className="mt-2">
              <p className="font-bold text-base sm:text-xl">Menú de Inauguración:</p>
              <ul className="text-base sm:text-xl list-disc ml-6">
                <li>Plato del día: Especial del Chef</li>
                <li>Entrada: Ensalada Fresca</li>
                <li>Plato Principal: Filete de Salmón</li>
                <li>Postre: Tarta de Chocolate</li>
              </ul>
            </div>
            <p className="mt-4 text-base sm:text-xl">¡No se pierdan nuestra oferta especial de inauguración y vengan a disfrutar de una experiencia gastronómica única!</p>
          </div>
          <div className="mt-5">
            <img
              className="h-[200px] sm:h-[250px] md:h-[350px] md:min-w-[350px] sm:min-w-[250px] w-auto rounded-3xl"
              src={sanwis}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div className="h-[500px] bg-yellow-300">
        <div className="flex flex-col sm:flex-row items-center justify-between px-5">
          <img
            className="h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-auto"
            src={wafle}
            alt="Logo"
          />
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">¡Ven y visítanos!</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Toda una experiencia de sabor</h1>
          </div>
        </div>
      </div>

      <div className="sm:h-[600px] bg-green-400">
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 sm:py-10 md:py-10 lg:py-10">
          <div className="mt-10 md:mt-0 sm:mt-0">
            <h1 className="text-xl sm:text-2xl font-bold mb-4">Contamos con especialidades que harán que tu comida sea toda una experiencia:</h1>
            <p className="font-bold text-base sm:text-lg">Desayunos:</p>
            <ul className="text-base sm:text-lg list-disc ml-6">
              <li>Omelette</li>
              <li>Waffles</li>
              <li>Chilaquiles</li>
            </ul>
            <p className="font-bold text-base sm:text-lg mt-4">Comidas:</p>
            <ul className="text-base sm:text-lg list-disc ml-6">
              <li>Sanwich</li>
              <li>Wrap</li>
              <li>Ensaladas</li>
            </ul>
            <p className="mt-4 text-base sm:text-lg">La tradición y los mejores ingredientes nos distinguen, harán de tu comida algo especial!</p>
            <p className="font-bold text-base sm:text-lg mt-4">Visita nuestro menú para más opciones...</p>
          </div>
          <div className="mb-5 mt-10 md:mt-0 sm:mt-0 md:min-w-[350px] sm:min-w-[250px]">
            <img
              className="h-[200px] sm:h-[250px] md:h-[350px] w-auto rounded-3xl"
              src={wrap}
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;


// import React, { useState } from "react";
// import Logo from "../assets/Restaurant-Logo.png"
// import Borde from "../assets/borde.png"
// import sanwis from "../assets/sanwis.jpg"
// import wafle from "../assets/waffle-removebg-preview.png"
// import wrap from "../assets/wrapverder.jpg"
// import Footer from "../footer/Footer";

// function Home() {
//   return (
//     <div className="bg-blue-200">
//       <div className="h-[450px]">
//         <div className="flex items-center justify-between px-10 py-5">
//           <div>
//           <img
//           className="h-[400px] w-[400px]"
//             src={Borde}
//             alt="Logo"
//           />
//           </div>
//           <div>
//           <img
//           className="h-[300px] w-[230px] hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
//             src={Logo}
//             alt="Logo"
//           />
//           </div>
//           <div>
//           <img
//           className="h-[400px] w-[400px] rotate-180"
//             src={Borde}
//             alt="Logo"
//           />
//           </div>
//         </div>
//       </div>

//       <div className="h-[550px] bg-green-400 py-5">
//         <div className="flex items-center justify-between px-10">
//           <div>
//             <h1 className="text-5xl font-bold mb-4">¡Bienvenidos al nuevo restaurante!</h1>

//             <p className="text-2xl">¡Estamos emocionados de presentarles nuestro nuevo restaurante!</p>

//             <p className="mt-4 text-2xl">Aquí está nuestra oferta especial de inauguración:</p>

//             <div className="mt-2">
//               <p className="font-bold text-2xl">Menú de Inauguración:</p>
//               <ul className="text-2xl list-disc ml-6">
//                 <li>Plato del día: Especial del Chef</li>
//                 <li>Entrada: Ensalada Fresca</li>
//                 <li>Plato Principal: Filete de Salmón</li>
//                 <li>Postre: Tarta de Chocolate</li>
//               </ul>
//             </div>

//             <p className="mt-4 text-2xl">¡No se pierdan nuestra oferta especial de inauguración y vengan a disfrutar de una experiencia gastronómica única!</p>
//           </div>
//           <div className="mr-5 mt-5">
//             <img
//             className="h-[400px] w-[545px] mr-5 rounded-3xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
//               src={sanwis}
//               alt="Logo"
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-between px-10">
//           <div className="">
//               <img
//               className="h-[780px] w-[780px] hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
//                 src={wafle}
//                 alt="Logo"
//               />
//           </div>
//           <div className="-translate-y-2/3 -translate-x-1 text-center">
//           <h1 className="text-5xl font-bold">¡Ven y visitanos!</h1>
//           <h1 className="text-5xl font-bold">Toda una experiencia de sabor</h1>
//           </div>

//         </div>
//       </div>

//       <div className="h-[500px] bg-yellow-300"></div>

//       <div className="h-[600px] bg-green-400">
//         <div className="flex items-center justify-between px-10 py-20">
//         <div className="mt-10">
//           <h1 className="text-3xl font-bold mb-4">Contamos con especialidades que harán que tu comida sea toda una experiencia:</h1>
//           <p className="font-bold text-2xl">Desayunos:</p>
//           <ul className="text-2xl list-disc ml-6">
//             <li>Omelette</li>
//             <li>Waffles</li>
//             <li>Chilaquiles</li>
//           </ul>
//           <p className="font-bold text-2xl">Comidas:</p>
//           <ul className="text-2xl list-disc ml-6">
//             <li>Sanwich</li>
//             <li>Wrap</li>
//             <li>Ensaladas</li>
//           </ul>
//           <p className="mt-4 text-2xl">La tradición y los mejores ingredientes nos distinguen, haran de tu comida al especial!</p>
//           <p className="font-bold text-2xl mt-4">Visita nuestro menu para mas opciones...</p>
//         </div>
//         <div className="mr-10">
//               <img
//               className="h-[450px] w-[450px] rounded-3xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
//                 src={wrap}
//                 alt="Logo"
//               />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// export default Home;