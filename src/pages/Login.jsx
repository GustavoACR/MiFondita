import { useRef, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/Restaurant-Logo.png";
import { Context } from "../context/Context";
import Footer from "../footer/Footer";

function Login() {
  const Ctx = useContext(Context)
  const nombreInputRef = useRef();
  const contraseñaInputRef = useRef();

  const loginHandler = () => {
    Ctx.login(
      nombreInputRef.current.value,
      contraseñaInputRef.current.value
    );
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") loginHandler();
  };

  return (
    <div className="flex items-center justify-center mt-20 mb-20">
      {Ctx.authenticated && <Navigate to="/requerimientos" />}
      <div className="sm:max-w-sm max-w-[350px]">
      <div className="w-[250px] sm:w-[300px] md:w-[350px] rounded-3xl px-6 py-4 shadow-md bg-white">
        <div className="flex items-center justify-center">
        <img
          className="h-[150px] w-[80px]"
          src={Logo}
          alt="Logo"
        />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        <span className="font-bold block">Login</span>
        </h2>
          <div className="mt-10">
            <div>
              <input
                type="text"
                placeholder="Usuario"
                ref={nombreInputRef}
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-4"
                onKeyDown={keyPressHandler}
              />
            </div>

            <div className="mt-7">
              <input
                type="password"
                placeholder="Contraseña"
                ref={contraseñaInputRef}
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-4"
                onKeyDown={keyPressHandler}
              />
            </div>

            <div className="mt-7">
              <button
                onClick={(e) => loginHandler()}
                className="bg-red-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
