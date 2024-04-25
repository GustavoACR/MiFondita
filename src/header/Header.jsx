// import { Link } from "react-router-dom";
// import Logo from "../assets/Restaurant-Logo.png";
// import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";

// function Header() {
//   return (
//     <header className="border-b border-black w-full bg-white">

//   <div className="mt-5 mb-10 flex items-center justify-center">
//     <img
//         className="h-[300px] w-[230px] hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
//         src={Logo}
//         alt="Logo"
//       />
//   </div>

//   <div className="flex items-center justify-between px-10 py-5 text-2xl sm:text-3xl">
//     <div>
//       <Link
//         to="/"
//         className="mx-3 hover:text-red-500"
//       >
//         Inicio
//       </Link>
//       <Link
//         to="/menu"
//         className="mx-3 hover:text-red-500"
//       >
//         Menu
//       </Link>
//       <Link
//         to="/login"
//         className="mx-3 hover:text-red-500"
//       >
//         Login
//       </Link>
//     </div>

//     <div className="flex items-center space-x-10 mr-20">
//       <button
//         onClick={() => {}}
//         className="hover:scale-105"
//       >
//         <FaFacebook className="text-5xl" />
//       </button>

//       <button
//         onClick={() => {}}
//         className="hover:scale-105"
//       >
//         <FaInstagram className="text-5xl" />
//       </button>
//     </div>

//     <div className="flex items-center">
//         <button
//           onClick={() => {}}
//           className="hover:scale-105 mr-2"
//         >
//           <FaPhoneAlt className="text-2xl" />
//         </button>
//         <span>631-167-1042</span>
//     </div>
//   </div>
// </header>
//   );
// }
// export default Header;


import { Link } from "react-router-dom";
import Logo from "../assets/Restaurant-Logo.png";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Header() {
  return (
    <header className="border-b border-black w-full bg-white">

      <div className="mt-5 flex items-center justify-center">
        <img
          className="h-[100px] md:h-[250px] w-auto hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          src={Logo}
          alt="Logo"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 py-3 sm:py-5 text-base sm:text-md lg:text-xl font-aronesans">
        <div className="flex flex-row sm:mb-0 mb-3 sm:mr-5 w-[200px] md:w-[250px] lg:w-[300px]">
          <Link
            to="/"
            className="block sm:inline-block mx-3 hover:text-red-500 text-center"
          >
            Inicio
          </Link>
          <Link
            to="/menu"
            className="block sm:inline-block mx-3 hover:text-red-500 text-center"
          >
            Menu
          </Link>
          <Link
            to="/login"
            className="block sm:inline-block mx-3 hover:text-red-500 text-center"
          >
            Clientes
          </Link>
        </div>

        <div className="flex items-center justify-between w-[90px]">
          <button
            onClick={() => {}}
            className="hover:scale-105"
          >
            <FaFacebook className="text-3xl lg:text-4xl" />
          </button>

          <button
            onClick={() => {}}
            className="hover:scale-105"
          >
            <FaInstagram className="text-3xl lg:text-4xl" />
          </button>
        </div>

        <div className="flex items-center justify-center w-[250px] lg:w-[300px]">
          <button
            onClick={() => {}}
            className="hover:scale-105 mr-2"
          >
            <FaPhoneAlt className="text-base sm:text-xl lg:text-2xl" />
          </button>
          <span className="text-base sm:text-md lg:text-xl">631-167-1042</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
